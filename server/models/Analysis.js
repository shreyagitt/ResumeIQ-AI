const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    atsScore: {
      type: Number,
    },

    matchedSkills: [
      String,
    ],

    missingSkills: [
      String,
    ],

    extractedText: {
      type: String,
    },

    aiSuggestions: {
      type: String,
    },

    jobDescription: {
      type: String,
    },

    shortlisted: {
  type: Boolean,
  default: false,
},
resumeFile: {
  type: String,
},

  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "Analysis",
    analysisSchema
  );