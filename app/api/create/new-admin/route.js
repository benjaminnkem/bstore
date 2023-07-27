import dbConnection from "@/data/mysql_db";
import { NextResponse } from "next/server";
import { hashSync } from "bcryptjs";
import connectToDB from "@/utils/db";
import AdminUser from "@/utils/schemas/AdminUser";
const uuid = require("uuid").v4;

export async function POST(req) {
  const loginData = await req.json();
  const connection = await dbConnection.getConnection();

  try {
    await connectToDB();

    if (loginData) {
      const hashedPassword = hashSync(loginData.password, 12);
      const queryString = `INSERT INTO admin_users (id, is_master, username, password)
      VALUES ("${uuid()}", ${0}, "${loginData.username}", "${hashedPassword}")`;

      await connection.query(queryString);

      // Storing in MongoDB
      await AdminUser.create({ ...loginData, password: hashedPassword });

      return NextResponse.json({ message: "User created successfully" });
    } else {
      return new NextResponse("No Data", { status: 204 });
    }
  } catch (err) {
    console.log(err.message);
    return new NextResponse("An error occurred", { status: 500 });
  }
}
