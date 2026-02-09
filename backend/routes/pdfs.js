import express from "express";
import { addPdf, deletePdf, getPdf, getPdfs, updatePdf } from "../controllers/pdf.js";

const router = express.Router();

router.get("/", getPdfs);
router.get("/:id", getPdf);
router.post("/", addPdf);
router.delete("/:id", deletePdf);
router.put("/:id", updatePdf);

export default router;