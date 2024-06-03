import { Router } from "express";
import {
  createMedic,
  deleteMedic,
  getMedic,
  getMedics,
  updateMedic
} from "../controllers/medics.controller.js";

const router = Router();

// Routes
router.post("/medics", createMedic);
router.get("/medics", getMedics);
router.put("/medics/:id", updateMedic);
router.delete("/medics/:id", deleteMedic);
router.get("/medics/:id", getMedic);


export default router;