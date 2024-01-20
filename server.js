import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import { userRoutes } from "./routes/user.js";
import { itemRoutes } from './routes/item.js';
import mongoose from "mongoose";

const PORT = 5999;
const app = express();

app.use(express.json());
app.use("/", userRoutes);
app.use('/', itemRoutes);

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb+srv://expensenoteapp.rs69tqw.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongooseDB connected");
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("App listening on " + PORT);
    });
  });
