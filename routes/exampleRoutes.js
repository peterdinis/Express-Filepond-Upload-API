import express from "express";
import { exampleUploadFn } from "../controller/exampleController.js";

const router = express.Router();

router.get("/example/upload", exampleUploadFn);

export default router;