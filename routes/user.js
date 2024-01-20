import express from "express";
import { registerUser } from "../controllers/user.js";

const Route = express.Router();

Route.get("/", (req, res) => {
    res.send("Welcome to expense note");
  });

  Route.post('/api/user/register', registerUser);
  
export { Route as userRoutes}
