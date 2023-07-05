import connectToDb from "@/utils/db";
import User from "@/utils/schemas/UsersSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  try {
    await connectToDb();
    const allUsers = await User.find({});
    return NextResponse.json({ data, allUsers });
  } catch (e) {
    console.log(e);
  }
}
