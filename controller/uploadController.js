import db from "../db.js";

export const getAllPhotos = async (req, res, next) => {
  const allPhotosInApp = await db.file.findMany({});
  return res.json(allPhotosInApp);
};

export const getPhotoDetail = async (req, res, next) => {
  const { id } = req.params;
  const imageInfo = await prisma.file.findFirst({
    where: {
      id,
    },
  });

  if (!imageInfo) {
    return res.status(404).json("No image found");
  }

  return res.json(imageInfo);
};

export const uploadNewPhoto = async (req, res) => {
  const { filename, path } = req.file;

  // Save the file to the database
  const savedFile = await db.file.create({
    data: {
      name: filename,
      path,
    },
  });

  res.status(200).json({ id: savedFile.id });
};

/* TODO: Add endpoint for delete all images and delete one image */
