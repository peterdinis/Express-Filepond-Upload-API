import express from "express";
import multer from "multer";
import { PrismaClient } from "@prisma/client";
import * as FilePond from "filepond";

const router = express.Router();

const filepond = FilePond.create({
  allowMultiple: false,
  allowRevert: false,
  server: {
    process: "/api/upload",
  },
});

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get("/api/uploads/all", async(req, res) => {
  const prisma = new PrismaClient();
  const allPhotosInApp = await prisma.file.findMany({});
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

export default router;
