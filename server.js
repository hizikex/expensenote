import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import { userRoutes } from "./routes/user.js";
import { itemRoutes } from './routes/item.js';
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(itemRoutes);

const DB = process.env.DATABASE
  mongoose.connect(DB).then(()=>{
    console.log("dataBase established");

    app.listen(process.env.PORT, () => {
      console.log("App listening on " + process.env.PORT);
    });
  }).catch((err)=>{
    console.log(err.message);
  })

