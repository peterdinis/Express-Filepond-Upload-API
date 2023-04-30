import db from "../db";

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

/* TODO: Add endpoint for delete all images and delete one image */