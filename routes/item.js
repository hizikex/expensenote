import express from "express";
import { createItem, getUserItems } from "../controllers/item.js";

const Route = express.Router();

  Route.post('/api/createItem/:userId', createItem);
  Route.get('/api/allItems/:userId', getUserItems);
  
export { Route as itemRoutes}
