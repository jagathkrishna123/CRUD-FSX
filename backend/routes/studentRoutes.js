const express = require("express");
const { createStudentController, getAllStudents, updateStudentController, deleteStudentController } = require("../controllers/studentController");
const router = express.Router();

// const {
//   createStudent,
//   getStudents,
//   updateStudent,
//   deleteStudent
// } = require("../controllers/studentController");

// router.post("/", createStudent);
// router.get("/", getStudents);
// router.put("/:id", updateStudent);
// router.delete("/:id", deleteStudent);

router.post("/", createStudentController);
router.get("/", getAllStudents);
router.put("/:id", updateStudentController);
router.delete("/:id", deleteStudentController);

module.exports = router;