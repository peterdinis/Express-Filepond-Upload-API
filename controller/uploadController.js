import db from "../db.js";

export const getAllPhotos = async (req, res, next) => {
  const allPhotosInApp = await db.file.findMany({});
  return res.json(allPhotosInApp);
};

export const getPhotoDetail = async (req, res, next) => {
  const { id } = req.params;
  const imageInfo = await db.file.findFirst({
    where: {
      id: Number(id)
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
      externalId: String(Math.floor(100000 + Math.random() * 900000))
    },
  });

  res.status(200).json({ id: savedFile.id });
};

export const removeOneImage = async(req, res) =>{
  const { id } = req.params;
  const findOneImage = await db.file.findFirst({
    where: {
      id: Number(id)
    }
  })

  if(!findOneImage) {
    return res.status(404).json("Image not found");
  }

  const imageToDelete = await db.file.delete({
    where: {
      id: findOneImage.id
    }
  })

  return res.json(imageToDelete);
}

export const deleteAllImages = async(req, res) =>{
  const removeAllImages = await db.file.deleteMany({});
  return res.json(removeAllImages);
}