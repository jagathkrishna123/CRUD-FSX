// const express = require("express");
// const { createStudentController, getAllStudents, updateStudentController, deleteStudentController } = require("../controllers/studentController");
import express from "express"
import { createStudentController, deleteStudentController, getAllStudents, updateStudentController } from "../controllers/studentController.js";
const router = express.Router();



router.post("/", createStudentController);
router.get("/", getAllStudents);
router.put("/:id", updateStudentController);
router.delete("/:id", deleteStudentController);

export default router;