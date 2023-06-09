import express from "express";
import {
  getAllPhotos,
  getPhotoDetail,
  uploadNewPhoto,
  deleteAllImages,
  removeOneImage,
} from "../controller/uploadController.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.get("/api/upload/all", getAllPhotos);
router.get("/api/upload/detail/:id", getPhotoDetail);
router.post("/api/upload", upload.single("filepond"), uploadNewPhoto);
router.delete("/api/upload/image/:id/delete", removeOneImage);
router.delete("/api/upload/images/delete", deleteAllImages);

export default router;
