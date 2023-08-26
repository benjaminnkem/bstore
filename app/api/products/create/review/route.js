import connectToDB from "@/utils/db";
import ProductsSchema from "@/utils/schemas/ProductsSchema";
import reviews from "@/utils/schemas/products/reviews";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectToDB();

    const info = await reviews.create(data);
    await ProductsSchema.updateOne({ _id: new ObjectId(data.productId) }, { $push: { rating: [info._id] } });
    return new NextResponse("Review uploaded successfully", { status: 200, statusText: "Uploaded successfully" });
  } catch (e) {
    console.log(e);
    return new NextResponse("Sorry, an error occurred", { status: 500, statusText: "Sorry, an error occurred" });
  }
}
