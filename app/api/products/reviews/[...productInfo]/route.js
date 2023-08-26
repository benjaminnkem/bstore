import connectToDB from "@/utils/db";
import reviews from "@/utils/schemas/products/reviews";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  try {
    const { productInfo } = params;
    await connectToDB();

    const productId = productInfo[0];
    const step = Number(productInfo[1]);

    const baseNoOfReviews = 5;

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
