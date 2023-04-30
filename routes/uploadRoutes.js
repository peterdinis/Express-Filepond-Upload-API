import express from "express";
import { PrismaClient } from "@prisma/client";
import {upload} from "../middleware/multer";
import db from "../db";

const router = express.Router();

router.get("/api/uploads/all", async(req, res) => {
  const allPhotosInApp = await db.file.findMany({});
  return res.json(allPhotosInApp);
});

router.get("/api/detail/:id", async(req, res) => {
  const prisma = new PrismaClient();
  const {id} = req.params;
  const imageInfo = await prisma.file.findFirst({
    where: {
      id
    }
  })

  if(!imageInfo) {
    return res.status(404).json("No image found");
  }

  return res.json(imageInfo);
})

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

/* TODO: Add endpoint for delete all images and delete one image */

export default router;
