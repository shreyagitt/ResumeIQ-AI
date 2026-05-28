const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middleware/authMiddleware");

const {

  getCandidates,

  toggleShortlist,

} = require(
  "../controllers/recruiterController"
);


// GET ALL CANDIDATES
router.get(
  "/candidates",
  protect,
  getCandidates
);


// SHORTLIST
router.put(
  "/shortlist/:id",
  protect,
  toggleShortlist
);

module.exports = router;