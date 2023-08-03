import { createEdgeRouter } from "next-connect";
import { NextResponse } from "next/server";
import multer from "multer";

const router = createEdgeRouter();

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/uploads/products/",
    filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname),
  }),
});

router.use(upload.single("productImage"));
router.post("/api/tests/nextc", async (req) => {
  try {
    const d = await req.json();

    const formData = await req.formData();
    const itemName = formData.get("itemName");
    const otherName = formData.get("otherName");
    const price = formData.get("price");
    const category = formData.get("category");
    const description = formData.get("description");
    const productImage = formData.get("productImage");

    return NextResponse.json(
      { msg: "Product created successfully" },
      { status: 200, statusText: "Product Uploaded Successfully" }
    );
  } catch (e) {
    console.log(e);
    return new NextResponse("An error occurred " + e, { status: 500 });
  }
});

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
