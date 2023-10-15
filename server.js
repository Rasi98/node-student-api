import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import studentRouter from './routes/studentRoute.js';
const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/students',studentRouter);

//connet to MongoDB Atlas
mongoose.connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    //start local server (listening)
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})