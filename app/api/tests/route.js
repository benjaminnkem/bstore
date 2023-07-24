import connectToDB from "@/utils/db";
import AdminUser from "@/utils/schemas/AdminUser";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectToDB();
    const adminUser = await AdminUser.findOne({ username: 'benjaminnkem' }, { username: 1, password: 1 });
    return NextResponse.json(adminUser);
  } catch (err) {
    console.log(err);
  }
}
