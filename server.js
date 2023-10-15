import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import studentModel from './models/studentModel.js';

const app = express();
app.use(express.json())

//post
app.post('/students/addStudent', async(req,res) => {
    try {
        const student = await studentModel.create(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//get all
app.get('/students', async(req,res)=>{
    try {
        const students = await studentModel.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//get one
app.get('/students/:id',async(req,res) => {
    try {
        const {id} = req.params;
        const students = await studentModel.findById(id);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: error});
    }
})

//update 
app.put('/students/:id', async(req,res) => {
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
app.delete('/students/:id',async(req,res) => {
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

//connet to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    //start local server (listening)
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})