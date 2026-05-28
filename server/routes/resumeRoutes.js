const express = require("express");

const router = express.Router();

const upload = require("../utils/multer");
const protect =
  require("../middleware/authMiddleware");

const {
  uploadResume,
} = require("../controllers/resumeController");


// UPLOAD ROUTE
router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResume
);

module.exports = router;