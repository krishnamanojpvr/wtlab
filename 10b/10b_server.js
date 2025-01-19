const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize Express
const app = express();
const port = 5000;

// Middleware

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/school", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Define the student schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  rollNumber: String,
  subjects: [String],
  address: {
    street: String,
    city: String,
    zip: String,
  },
});

// Create the student model
const Student = mongoose.model("Student", studentSchema);

// API endpoint to fetch student details based on roll number
app.get("/api/student/:rollNumber", async (req, res) => {
  const { rollNumber } = req.params;

  try {
    const student = await Student.findOne({ rollNumber });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching student details" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
