const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middleware/authMiddleware");

const {
  getHistory,getLatestAnalysis,
} = require(
  "../controllers/analysisController"
);

router.get(
  "/history",
  protect,
  getHistory
);

router.get(
  "/latest",
  protect,
  getLatestAnalysis
);

module.exports = router;