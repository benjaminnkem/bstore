import connectToDB from "@/utils/db";
import ProductsCreateSchema from "@/utils/schemas/ProductsCreateSchema";
import { ObjectId } from "mongodb";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req, _res) {
  const token = await getToken({ req });
  if (!token) {
    return new NextResponse("You are not authorized to access this resource", { status: 401 });
  }

  try {
    await connectToDB();
    const productData = await req.json();
    await ProductsCreateSchema.create({
      ...productData,
      is_available: true,
      images: [""],
      seller_id: new ObjectId(productData.seller_id),
    });

    return NextResponse.json({ msg: "Product Created" });
  } catch (err) {
    console.log("Upload err", err);
    throw new Error("An error occurred while posting the product");
  }
}

/*
import nextConnect from "next-connect";
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/uploads/",
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("image"));
apiRoute.post("/api/admin/create-album", async (req, res) => {
  res.status(200).json({ msg: "Success" });
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default apiRoute;

*/
