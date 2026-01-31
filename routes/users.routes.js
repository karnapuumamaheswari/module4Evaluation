import express from "express";
import {createUser,getUsers} from "../controllers/user.controllers.js";
import { get } from "node:http";
const router = express.Router();

router.post("/create",createUser);
router.get("/all",getUsers);

export default router;