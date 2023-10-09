import express from 'express';
const app = express();

const port = 3000;

//routes
app.get('/', (req,res) => {
    res.send('Hello worlds!')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})