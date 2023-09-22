import connectToDB from "@/lib/config/db";
import reviews from "@/lib/schemas/products/reviews";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { productInfo } = params;

    const productId = productInfo[0];
    const step = Number(productInfo[1]);

    const baseNoOfReviews = 5;

    await connectToDB();
    const reviewsForProduct = await reviews.aggregate([
      { $match: { productId: new ObjectId(productId) } },
      { $limit: 5 },
      { $sort: { date_posted: -1 } },
      { $skip: step === 0 ? 0 : step * baseNoOfReviews },
    ]);

    return NextResponse.json(reviewsForProduct);
  } catch (e) {
    console.log(e);
    return new NextResponse("Sorry, an error occurred", { status: 500, statusText: "Sorry, an error occurred" });
  }
}
