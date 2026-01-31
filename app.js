import express from "express";
import useRoutes from "./routes/users.routes.js";
import vehicleRoutes from "./routes/vehicle.routes.js";
import tripRoutes from "./routes/trips.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

import logger from "./middlewares/logger.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";
import notFound from "./middlewares/notfount.middleware.js";
import { escape } from "node:querystring";
import { userInfo } from "node:os";
import { useReducer } from "react";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/users" ,useRoutes);
app.use("/vehicles",vehicleRoutes);
app.use("/trips",tripRoutes);
app.use("/analytics",analyticsRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;