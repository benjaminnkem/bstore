import connectToDB from "@/utils/db";
import ratings from "@/utils/schemas/products/reviews";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectToDB();
    await ratings.create(data);
    return new NextResponse("Review uploaded successfully", { status: 200, statusText: "Uploaded successfully" });
  } catch (e) {
    return new NextResponse("Sorry, an error occurred", { status: 401, statusText: "Sorry, an error occurred" });
  }
}
