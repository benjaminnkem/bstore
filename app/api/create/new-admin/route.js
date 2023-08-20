import connectToDB from "@/utils/db";
import AdminUser from "@/utils/schemas/AdminUser";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const { username, email, password } = data;
    if (!username || !password || !email) throw new Error("Invalid username or password");
    const hashedPassword = await hash(password, 12);

    connectToDB();
    await AdminUser.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    throw new Error(err.message);
  }
}
