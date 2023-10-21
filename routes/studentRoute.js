import express from "express";
import {
  addStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";
const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.get("/:name", getStudent);
studentRouter.post("/addStudent", addStudent);
studentRouter.put("/:id", updateStudent);
studentRouter.delete("/:id", deleteStudent);

export default studentRouter;
