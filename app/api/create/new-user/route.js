import connectToDB from "@/utils/db";
import User from "@/utils/schemas/users/UsersSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  try {
    await connectToDB();
    const allUsers = await User.find({});
    return NextResponse.json({ data, allUsers });
  } catch (e) {
    console.log(e);
  }
}
