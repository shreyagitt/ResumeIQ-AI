const fs = require("fs");

const pdfParse = require("pdf-parse");

const skillsList = require("../utils/skills");
const Analysis =
  require("../models/Analysis");

const model = require("../utils/gemini");


// UPLOAD + ANALYZE RESUME
const uploadResume = async (req, res) => {

  try {

    // CHECK FILE
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    // READ PDF FILE
    const dataBuffer = fs.readFileSync(
      req.file.path
    );

    // PARSE PDF
    const pdfData = await pdfParse(dataBuffer);

    // EXTRACT TEXT
    const extractedText =
      pdfData.text.toLowerCase();

    // JOB DESCRIPTION
    const jobDescription =
      req.body.jobDescription.toLowerCase();


    // MATCHED + MISSING SKILLS
    const matchedSkills = [];

    const missingSkills = [];


    skillsList.forEach((skill) => {

      const inResume =
        extractedText.includes(skill);

      const inJD =
        jobDescription.includes(skill);

      // MATCHED
      if (inResume && inJD) {
        matchedSkills.push(skill);
      }

      // MISSING
      if (!inResume && inJD) {
        missingSkills.push(skill);
      }

    });


    // ATS SCORE
    let atsScore = 0;

    const totalSkills =
      matchedSkills.length +
      missingSkills.length;

    if (totalSkills > 0) {

      atsScore = Math.round(
        (matchedSkills.length / totalSkills) * 100
      );

    }


    // GEMINI AI SUGGESTIONS
    const prompt = `
You are an ATS resume analyzer.

Resume:
${extractedText}

Job Description:
${jobDescription}

Matched Skills:
${matchedSkills.join(", ")}

Missing Skills:
${missingSkills.join(", ")}

Provide 5 short professional ATS improvement suggestions.
`;

    /*const result =
      await model.generateContent(prompt);

    const aiSuggestions =
      result.response.text();*/

      let aiSuggestions = "";

try {

  const result =
    await model.generateContent(prompt);

  aiSuggestions =
    result.response.text();

} catch (error) {

  console.log("Gemini Error:", error.message);

  aiSuggestions = `
1. Add more quantified achievements.
2. Mention deployment experience.
3. Improve project descriptions.
4. Add more backend-related skills.
5. Include ATS-friendly keywords.
`;

}

// SAVE ANALYSIS

const savedAnalysis =
  await Analysis.create({

    user: req.user,
    resumeFile: `/uploads/${req.file.filename}`,

    atsScore,

    matchedSkills,

    missingSkills,

    extractedText,

    aiSuggestions,

    jobDescription,

});

    // RESPONSE
    res.status(200).json({

      message:
        "Resume analyzed successfully",

      extractedText,

      matchedSkills,

      missingSkills,

      atsScore,

      aiSuggestions,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  uploadResume,
};