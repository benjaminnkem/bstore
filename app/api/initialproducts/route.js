import connectToDB from "@/utils/db";
import ProductsCreateSchema from "@/utils/schemas/ProductsCreateSchema";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectToDB();
  const showcaseProducts = await ProductsCreateSchema.aggregate([
    { $match: {} },
    { $sort: { date_posted: -1 } },
    { $limit: 6 },
  ]);

  return NextResponse.json(showcaseProducts ? showcaseProducts : []);
}
