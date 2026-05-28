const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");


require("dotenv").config();


const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const analysisRoutes =
  require("./routes/analysisRoutes");

const recruiterRoutes =
  require("./routes/recruiterRoutes");  

const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use(express.static(
  path.join(__dirname, "public")
));

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use(
  "/api/analysis",
  analysisRoutes
);
app.use(
  "/api/recruiter",
  recruiterRoutes
);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("ResumeIQ AI Backend Running");
});


// MONGODB CONNECTION
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});


// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});