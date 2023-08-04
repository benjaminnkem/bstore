import connectToDB from "@/utils/db";
import ProductsCreateSchema from "@/utils/schemas/ProductsCreateSchema";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectToDB();
  const showcaseProducts = await ProductsCreateSchema.aggregate([
    { $match: {} },
    { $project: { _id: 1, itemName: 1, images: 1 } },
    { $sort: { date_posted: -1 } },
    { $limit: 8 },
  ]);

  return NextResponse.json(showcaseProducts ? showcaseProducts : []);
}
