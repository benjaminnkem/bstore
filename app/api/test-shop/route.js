import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET(req, res) {
  try {
    await client.connect();
    const db = client.db("bstore");
    const products = db.collection("products");
    const query = {};

    const results = await products
      .find(query)
      .project({ _id: 1, itemName: 1, images: 1, price: 1, description: 1 })
      .toArray();

    return NextResponse.json(results);
  } catch (e) {
    console.log("Error", e);
    return new NextResponse("A error occurred", { status: 500 });
  } finally {
    await client.close();
  }
}
