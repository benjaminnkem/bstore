import connectToDB from "@/lib/config/db";
import ProductsSchema from "@/lib/schemas/products/ProductsSchema";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectToDB();
  const showcaseProducts = await ProductsSchema.aggregate([
    { $match: {} },
    { $project: { _id: 1, itemName: 1, price: 1, images: 1, description: 1, date_posted: 1 } },
    { $sort: { date_posted: -1 } },
    { $limit: 19 },
  ]);

  return NextResponse.json(showcaseProducts ? showcaseProducts : []);
}
