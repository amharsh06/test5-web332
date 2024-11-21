const Student = require("../models/student"); 


exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll(); 
    res.status(200).json(students); 
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({
      message: "Error fetching students",
      error: error.message,
    });
  }
};


exports.createStudent = async (req, res) => {
  try {
    const { student_id, first_name, last_name, date_of_birth, email, enrollment_date, courses } = req.body;
    const student = await Student.create({
      student_id,
      first_name,
      last_name,
      date_of_birth,
      email,
      enrollment_date,
      courses,
    });
    res.status(201).json(student); 
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({
      message: "Error creating student",
      error: error.message,
    });
  }
};


exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.student_id); 
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student); 
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    res.status(500).json({
      message: "Error fetching student by ID",
      error: error.message,
    });
  }
};


exports.updateStudent = async (req, res) => {
  try {
    const { student_id } = req.params;
    const student = await Student.findByPk(student_id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const updatedData = req.body;
    await student.update(updatedData);
    res.status(200).json(student);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({
      message: "Error updating student",
      error: error.message,
    });
  }
};


exports.deleteStudent = async (req, res) => {
  try {
    const { student_id } = req.params;
    const student = await Student.findByPk(student_id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    await student.destroy(); 
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({
      message: "Error deleting student",
      error: error.message,
    });
  }
};
