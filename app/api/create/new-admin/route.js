// import dbConnection from "@/data/mysql_db";
// import { NextRequest, NextResponse } from "next/server";
// const uuid = require("uuid").v4;

// export async function POST(req, som) {
//   const s = new NextRequest(req)
//   console.log(s);
//   const connection = await dbConnection.getConnection();
//   try {
//     console.log();
//     const query = `INSERT INTO ${process.env.DB_NAME} (id, name, email, password)
//     VALUES (${uuid()}, ${""}, ${""}, ${""})`;
   
//   } catch (err) {
//     console.log(err.message);
//   }

//   return NextResponse.json({ msg: "Something" });
// }
