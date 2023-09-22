import connectToDB from "@/lib/config/db";
import ProductsSchema from "@/utils/schemas/ProductsSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const tag = params.tagCursor;
    await connectToDB();

    const allProductsForNow = await ProductsSchema.find({});
    return NextResponse.json(allProductsForNow);
  } catch (e) {
    return new NextResponse("Sorry, an error occurred while getting product", { status: 500 });
  }
}
