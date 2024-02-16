import connectToDB from "@/lib/config/db";
import ProductsSchema from "@/lib/schemas/products/ProductsSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const tag = params.tagCursor;

    await connectToDB();

    if (!tag) return NextResponse.json(await ProductsSchema.find({}));

    if (tag?.toLowerCase() === "general") {
      return NextResponse.json(
        await ProductsSchema.aggregate([
          {
            $sample: { size: 10 },
          },
        ])
      );
    }

    const tagProduct = await ProductsSchema.find({
      tags: tag,
    });
    return NextResponse.json(tagProduct);
  } catch (e) {
    return new NextResponse("Sorry, an error occurred while getting product", { status: 500 });
  }
}
