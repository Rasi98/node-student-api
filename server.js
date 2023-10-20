import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import studentRouter from "./routes/studentRoute.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/students", studentRouter);

//Error handling middleware
app.use(errorMiddleware);

//connet to MongoDB Atlas
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    //start local server (listening)
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
