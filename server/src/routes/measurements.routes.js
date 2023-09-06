import { Router } from "express";
import {
  createMeasurement,
  getAllMeasurements,
} from "../controllers/measurements.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/", authRequired, getAllMeasurements);
router.post("/add", authRequired, createMeasurement);

export default router;
