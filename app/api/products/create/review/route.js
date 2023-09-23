import connectToDB from "@/lib/config/db";
import ProductsSchema from "@/lib/schemas/products/ProductsSchema";
import reviews from "@/lib/schemas/products/reviews";
import UsersSchema from "@/lib/schemas/users/UsersSchema";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const authenticateUser = async (req) => {
  const token = await getToken({ req });
  if (!token) return new NextResponse("You are not logged in", { status: 401, statusText: "You are not logged in." });
};

export async function POST(req) {
  await authenticateUser(req);
  try {
    const content = await req.json();
    await connectToDB();

    const session = await getServerSession({ req });
    if (!session)
      return new NextResponse("Sorry, an error occurred", { status: 500, statusText: "Sorry, an error occurred" });

    const user = session.user;

    const userData = await UsersSchema.findOne({ username: user.name });
    if (!userData)
      return new NextResponse("This user does not exist.", { status: 404, statusText: "This user does not exist." });

    const info = await reviews.create({ ...content, username: userData.username, email: userData.email });
    await ProductsSchema.updateOne({ _id: new ObjectId(content.productId) }, { $push: { rating: [info._id] } });
    return new NextResponse("Review uploaded successfully", { status: 200, statusText: "Uploaded successfully" });
  } catch (e) {
    console.log(e);
    return new NextResponse("Sorry, an error occurred", { status: 500, statusText: "Sorry, an error occurred" });
  }
}
