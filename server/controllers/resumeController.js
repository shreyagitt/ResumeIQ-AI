const fs = require("fs");
const pdfParse = require("pdf-parse");

const skillsList = require("../utils/skills");
const Analysis = require("../models/Analysis");
const model = require("../utils/qwen");

const uploadResume = async (req, res) => {
  try {
    // Check file
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    // Read PDF
    const dataBuffer = fs.readFileSync(req.file.path);

    // Parse PDF
    const pdfData = await pdfParse(dataBuffer);

    // Resume text
    const extractedText = pdfData.text.toLowerCase();

    // Job Description
    const jobDescription = (req.body.jobDescription || "").toLowerCase();

    // Skill Matching
    const matchedSkills = [];
    const missingSkills = [];

    skillsList.forEach((skill) => {
      const inResume = extractedText.includes(skill);
      const inJD = jobDescription.includes(skill);

      if (inResume && inJD) {
        matchedSkills.push(skill);
      }

      if (!inResume && inJD) {
        missingSkills.push(skill);
      }
    });

    // ATS Score
    let atsScore = 0;

    const totalSkills =
      matchedSkills.length + missingSkills.length;

    if (totalSkills > 0) {
      atsScore = Math.round(
        (matchedSkills.length / totalSkills) * 100
      );
    }

    // Prompt
    const prompt = `
You are an experienced ATS Resume Reviewer.

Analyze the resume against the given Job Description.

Resume:
${extractedText}

Job Description:
${jobDescription}

Matched Skills:
${matchedSkills.join(", ") || "None"}

Missing Skills:
${missingSkills.join(", ") || "None"}

Instructions:
- Give exactly 5 personalized ATS suggestions.
- Mention missing skills if any.
- Mention weak sections if any.
- Suggest improvements to projects, experience and resume.
- Keep every suggestion under 30 words.
- Return ONLY the numbered suggestions.
`;

    let aiSuggestions = "";

    try {
      console.log("========== CALLING QWEN ==========");

      aiSuggestions = await model.generateContent(prompt);

      console.log("========== GENERATED SUGGESTIONS ==========");
      console.log(aiSuggestions);

    } catch (error) {

      console.error("========== AI ERROR ==========");
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "AI generation failed",
        error: error.message,
      });
    }

    // Save to MongoDB
    const savedAnalysis = await Analysis.create({
      user: req.user,
      resumeFile: `/uploads/${req.file.filename}`,
      atsScore,
      matchedSkills,
      missingSkills,
      extractedText,
      aiSuggestions,
      jobDescription,
    });

    // Response
    return res.status(200).json({
      success: true,
      message: "Resume analyzed successfully",

      analysisId: savedAnalysis._id,

      atsScore,
      matchedSkills,
      missingSkills,
      extractedText,
      aiSuggestions,
    });

  } catch (error) {

    console.error("========== SERVER ERROR ==========");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  uploadResume,
};