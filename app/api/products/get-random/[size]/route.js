import connectToDB from "@/lib/config/db";
import ProductsSchema from "@/lib/schemas/products/ProductsSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const randomSize = params.size;

    if (!randomSize) return NextResponse.json([]);

    await connectToDB();

    return NextResponse.json(await ProductsSchema.aggregate([{ $sample: { size } }]));
  } catch (e) {
    return new NextResponse("Sorry, an error occurred while getting product", { status: 500 });
  }
}
