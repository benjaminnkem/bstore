import ProductsSchema from "@/lib/schemas/products/ProductsSchema";
import { ObjectId } from "mongodb";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const token = await getToken({ req });
  if (!token) throw new Error("Unauthenticated");

  const { userId } = params;

  if (!userId) throw new Error("Invalid user id");

  try {
    const recentProducts = await ProductsSchema.aggregate([
      { $match: { seller_id: new ObjectId(userId) } },
      { $limit: 3 },
      { $project: { itemName: 1, images: 1, date_posted: 1, price: 1 } },
      { $sort: { date_posted: -1 } },
    ]);

    return NextResponse.json(recentProducts, { status: 200 });
  } catch (e) {
    throw new Error("An error occurred while fetching recent products");
  }
}
