import connectToDB from "@/lib/config/db";
import ProductsCreateSchema from "@/utils/schemas/ProductsSchema";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const productId = params.productId;

  await connectToDB();

  try {
    const productDetails = await ProductsCreateSchema.aggregate([
      { $match: { _id: new ObjectId(productId) } },
      {
        $lookup: {
          from: "adminusers",
          localField: "seller_id",
          foreignField: "_id",
          as: "seller",
        },
      },
    ]);
    if (!productDetails) return new NextResponse("", { status: 404, statusText: "Product not found" });

    return NextResponse.json(productDetails);
  } catch (e) {
    return new NextResponse("", { status: 404, statusText: "An error occurred" });
  }
}
