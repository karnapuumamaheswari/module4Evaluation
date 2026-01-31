import express from "express";
import { createTrip,getTrips,endTrip } from "../controllers/trip.controllers.js";

const router  = express.Router();

router.post("/create",createTrip);
router.get("/all",getTrips);
router.patch("/end/:id",endTrip);

export default router;