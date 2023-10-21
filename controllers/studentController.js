import studentModel from "../models/studentModel.js";
import asyncHandler from "express-async-handler";

export const addStudent = asyncHandler(async (req, res) => {
  try {
    const student = await studentModel.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

export const getAllStudents = asyncHandler(async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

export const getStudent = asyncHandler(async (req, res) => {
  try {
    const { name } = req.params;
    const student = await studentModel.find({ name: name });
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

export const updateStudent = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (!student) {
      res.status(404);
      throw new Error(`cannot find a student with id:${id}`);
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

export const deleteStudent = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
      res.status(404);
      throw new Error(`cannot find a student with id:${id}`);
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
