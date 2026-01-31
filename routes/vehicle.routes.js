import express from "express";
import { createVehicle,getVehicles } from "../controllers/vehicle.controllers";
import rateLimiter from "../middlewares/ratelimiter.middleware.js";
import { get } from "node:http";

const router = express.Router();
router.post("/create",rateLimiter,createVehicle);
router.get("/all",getVehicles);

export default router;