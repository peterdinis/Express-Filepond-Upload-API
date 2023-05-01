import express from "express";
import { exampleEndpoint } from "../controller/exampleController";

const router = express.Router();

router.get("/example/upload", exampleEndpoint);

export default router;