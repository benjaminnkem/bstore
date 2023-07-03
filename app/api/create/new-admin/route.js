import dbConnection from "@/data/mysql_db";
import { NextResponse } from "next/server";

export async function POST(req) {
  // const loginData = await req.json();
  // const connection = await dbConnection.getConnection();

  // try {
  //   if (loginData) {
  //     const hashedPassword = await bcrypt.hash(loginData.password, 12);
  //     const queryString = `INSERT INTO admin_users (id, is_master, username, password)
  //     VALUES ("${uuid()}", ${0}, "${loginData.username}", "${hashedPassword}")`;

  //     await connection.query(queryString);
  //     return new NextResponse("User created successfully", { status: 200 });
  //   } else {
  //     return new NextResponse("No Data", { status: 204 });
  //   }
  // } catch (err) {
  //   console.log(err.message);
  //   return new NextResponse("An error occurred", { status: 500 });
  // }
}
