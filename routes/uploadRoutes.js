import express from "express";
import { PrismaClient } from "@prisma/client";
import {upload} from "../middleware/multer";
import { getAllPhotos, getPhotoDetail } from "../controller/uploadController";

const router = express.Router();

router.get("/api/uploads/all",getAllPhotos);

router.get("/api/detail/:id",getPhotoDetail);

router.post("/api/upload", upload.single("filepond"), async (req, res) => {
  try {
    const prisma = new PrismaClient();
    const { filename, path } = req.file;

    // Save the file to the database
    const savedFile = await prisma.file.create({
      data: {
        name: filename,
        path,
      },
    });

    res.status(200).json({ id: savedFile.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
