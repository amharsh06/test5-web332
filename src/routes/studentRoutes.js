const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");


router.post("/students", studentController.createStudent);
router.get("/students", studentController.getAllStudents);
router.get("/students/:student_id", studentController.getStudentById);
router.put("/students/:student_id", studentController.updateStudent);
router.delete("/students/:student_id", studentController.deleteStudent);

module.exports = router; 
