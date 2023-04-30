import express from "express";
import {
  getAllPhotos,
  getPhotoDetail,
  uploadNewPhoto,
} from "../controller/uploadController.js";
import multer from "multer";

const router = express.Router();

export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get("/api/uploads/all", getAllPhotos);

router.get("/api/detail/:id", getPhotoDetail);

router.post("/api/upload", upload.single("filepond"), uploadNewPhoto);

export default router;
