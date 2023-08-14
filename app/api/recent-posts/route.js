import ProductsSchema from "@/utils/schemas/ProductsSchema";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connectToDB from "@/utils/db";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req, res) {
  const token = await getToken({ req });
  if (!token) return new NextResponse("You are not authorized", { status: 401 });

  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("You are not authorized", { status: 401 });
  }

  try {
    await connectToDB();
    const userId = session.user.id;
    const recentPosts = await ProductsSchema.aggregate([
      { $match: { seller_id: new ObjectId(userId) } },
      { $limit: 5 },
      { $project: { itemName: 1, images: 1, price: 1 } },
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
