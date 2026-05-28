const Analysis =
  require("../models/Analysis");


// GET USER ANALYSIS HISTORY
const getHistory = async (
  req,
  res
) => {

  try {

    const history =
      await Analysis.find({
        user: req.user,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json(
      history
    );

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};



// GET LATEST ANALYSIS
const getLatestAnalysis =
  async (req, res) => {

    try {

      const latestAnalysis =
        await Analysis.findOne({
          user: req.user,
        }).sort({
          createdAt: -1,
        });

      res.status(200).json(
        latestAnalysis
      );

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

};

module.exports = {

  getHistory,

  getLatestAnalysis,

};