const Analysis =
  require("../models/Analysis");


// GET ALL CANDIDATES
const getCandidates =
  async (req, res) => {

    try {

      const candidates =
        await Analysis.find()
        .populate({
  path: "user",
  select: "name email role",
})
        .sort({
          createdAt: -1,
        });

        const filteredCandidates =
  candidates.filter(
    (candidate) =>
      candidate.user !== null
  );

      res.status(200).json(
        filteredCandidates
      );

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

};




// TOGGLE SHORTLIST
const toggleShortlist =
  async (req, res) => {

    try {

      const analysis =
        await Analysis.findById(
          req.params.id
        );

      if (!analysis) {

        return res.status(404).json({
          message:
            "Analysis not found",
        });

      }

      analysis.shortlisted =
        !analysis.shortlisted;

      await analysis.save();

      res.status(200).json({
        message:
          "Shortlist updated",
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

};

module.exports = {

  getCandidates,

  toggleShortlist,

};