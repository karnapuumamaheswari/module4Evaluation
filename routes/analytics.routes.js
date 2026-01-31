import express from "express";

import { getAnalytics } from "../controllers/analytics.controller.js";

const router = express.Router();
router.get("/all",getAnalytics);
export default router;