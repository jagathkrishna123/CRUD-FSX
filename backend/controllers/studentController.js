// const Student = require("../models/Student");



// // CREATE
// exports.createStudent = async (req, res) => {
//   const student = await Student.create(req.body);
//   res.json(student);
// };

// // READ ALL
// exports.getStudents = async (req, res) => {
//   const students = await Student.find();
//   res.json(students);
// };

// // UPDATE
// exports.updateStudent = async (req, res) => {
//   const student = await Student.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json(student);
// };

// // DELETE
// exports.deleteStudent = async (req, res) => {
//   await Student.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// };



const Student = require("../models/Student");

// CREATE
exports.createStudentController = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

// READ
exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// UPDATE
exports.updateStudentController = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(student);
};

// DELETE
exports.deleteStudentController = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};