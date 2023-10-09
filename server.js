import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express();

app.get('/', (req,res) => {
    res.send('Hello worlds!')
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