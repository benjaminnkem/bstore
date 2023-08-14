import connectToDB from "@/utils/db";
import ProductsCreateSchema from "@/utils/schemas/ProductsSchema";
import { ObjectId } from "mongodb";
import multer from "multer";
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import nc from "next-connect";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import recentPostsScheme from "@/utils/schemas/partials/recentPostsScheme";

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
  storage: multer.diskStorage({
    destination: "public/images/uploads/products",
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname),
  }),
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

    const productData = {
      itemName: itemName.trim(),
      price,
      tags: mainTag,
      category: category.trim(),
      description: description.trim(),
      images: [`${defaultProductImagePath}${productImage}`], // describing the file path
      seller_id: new ObjectId(session.user.id),
    };

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
