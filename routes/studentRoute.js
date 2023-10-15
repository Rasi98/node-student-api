import express from "express";
import studentModel from '../models/studentModel.js'
const studentRouter = express.Router();

//add
studentRouter.post('/addStudent', async(req,res) => {
    try {
        const student = await studentModel.create(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//get all
studentRouter.get('/', async(req,res)=>{
    try {
        const students = await studentModel.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//get one
studentRouter.get('/:id',async(req,res) => {
    try {
        const {id} = req.params;
        const students = await studentModel.findById(id);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//update 
studentRouter.put('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const student = await studentModel.findByIdAndUpdate(id,req.body,{returnDocument:'after'})
        if(!student){
            return res.status(404).json({message: 'cannot find student'})
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//delete
studentRouter.delete('/:id',async(req,res) => {
    try {
        const {id} = req.params;
        const student = await studentModel.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({message: 'Student not found!'})
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

export default studentRouter;