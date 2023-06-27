import dbConnection from "@/data/mysql_db";
import { NextResponse } from "next/server";
const uuid = require("uuid").v4;

export async function POST(req) {
  const adminData = req;
  console.log(req);
  const connection = await dbConnection.getConnection();
  try {
    console.log();
    const query = `INSERT INTO ${process.env.DB_NAME} (id, name, email, password)
    VALUES (${uuid()}, ${""}, ${""}, ${""})`;
   
  } catch (err) {
    console.log(err.message);
  }

  return NextResponse.json({ msg: "Something" });
}
