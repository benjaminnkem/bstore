import ProductsSchema from "@/utils/schemas/ProductsSchema";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connectToDB from "@/utils/db";

export async function GET(req, { params }) {
  const token = await getToken({ req });
  if (!token) return new NextResponse("You are not authorized", { status: 401 });
  const { adminId } = params;
  try {
    await connectToDB();
    const recentPosts = await ProductsSchema.aggregate([
      { $match: { seller_id: new ObjectId(adminId) } },
      { $limit: 5 },
      { $project: { itemName: 1, images: 1, price: 1, date_posted: 1 } },
      { $sort: { date_posted: -1 } },
    ]);

    return NextResponse.json(recentPosts);
  } catch (err) {
    console.log(err);
    return new NextResponse("Sorry, an error occurred", {
      status: err.status || 500,
      statusText: "Sorry, Recent Posts could not be fetched",
    });
  }
}
