import express from "express";
import {
  getAllPhotos,
  getPhotoDetail,
  uploadNewPhoto,
} from "../controller/uploadController.js";
import {upload} from "../middleware/multer.js"

const router = express.Router();

router.get("/api/uploads/all", getAllPhotos);

router.get("/api/detail/:id", getPhotoDetail);

router.post("/api/upload", upload.single("filepond"), uploadNewPhoto);

export default router;
