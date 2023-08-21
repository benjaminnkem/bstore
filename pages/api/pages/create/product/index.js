import connectToDB from "@/utils/db";
import ProductsCreateSchema from "@/utils/schemas/ProductsSchema";
import { ObjectId } from "mongodb";
import multer from "multer";
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import nc from "next-connect";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import fs from "fs";
import DataURIParser from "datauri/parser";
import path from "path";

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const isDevMode = process.env.NODE_ENV === "production" ? true : false;

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

const upload = multer({
  storage: isDevMode
    ? multer.diskStorage({
        destination: "public/images/uploads/products",
        filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname),
      })
    : multer.memoryStorage(),
});

handler.use(upload.single("productImage")).post("/api/pages/create/product", async (req, res) => {
  const body = req.body;
  const productImage = req.file?.filename;

  const token = await getToken({ req });
  if (!token) return res.status(401).send("You are not authorized");

  await connectToDB();

  try {
    const { itemName, price, category, description, tags } = body;
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "You must be logged in." });
    }

    const defaultProductImagePath = "/images/uploads/products/";
    const mainTag = tags.split(",");
    const imageFile = req.file;

    let imageUrlCloud;
    if (!isDevMode) {
      const parser = new DataURIParser();

      const createImage = async (img) => {
        const base64Image = parser.format(path.extname(img.originalname).toString(), img.buffer);
        const uploadedImageResponse = await cloudinary.uploader.upload(base64Image.content, {
          folder: "products",
          resource_type: "image",
        });
        return uploadedImageResponse;
      };

      const createdImage = await createImage(imageFile);
      imageUrlCloud = createdImage.secure_url;
    }

    const productData = {
      itemName: itemName.trim(),
      price,
      tags: mainTag,
      category: category.trim(),
      description: description.trim(),
      images: [isDevMode ? `${defaultProductImagePath}${productImage}` : imageUrlCloud], // describing the file path
      seller_id: new ObjectId(session.user.id),
    };

    console.log(productData);

    await ProductsCreateSchema.create(productData);
    res.status(200).json({ message: "product created successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "An error occurred" });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
