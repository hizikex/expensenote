import express from "express";
import { createItem, getUserItems } from "../controllers/item.js";

const Route = express.Router();

  Route.post('/api/:userId/item', createItem);
  Route.get('/api/:userId', getUserItems);
  
export { Route as itemRoutes}
