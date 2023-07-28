import connectToDB from "@/utils/db";
import CategorySchema from "@/utils/schemas/CategorySchema";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await connectToDB();

    const { name } = body;
    const categoryExists = await CategorySchema.findOne({ name });
    if (categoryExists) {
      return new NextResponse(
        { message: "Category already exists" },
        { status: 403, statusText: "Category already exists" }
      );
    }

    await CategorySchema.create(body);
    return NextResponse.json(body);
  } catch (err) {
    console.log(err);
    throw new Error("An error occurred");
  }
}
