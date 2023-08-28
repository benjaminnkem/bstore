import connectToDB from "@/utils/db";
import UsersSchema from "@/utils/schemas/users/UsersSchema";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  try {
    const { username, email, password } = data;
    if (!username || !password || !email) throw new Error("Invalid username or password");

    const userExists = await UsersSchema.findOne({ username });
    if (userExists)
      return new NextResponse("User already exists", {
        status: 405,
        statusText: `Username (${username}) is unavailable`,
      });

    const emailExists = await UsersSchema.findOne({ email });
    if (emailExists)
      return new NextResponse(`User with email (${email}) already exists`, {
        status: 405,
        statusText: `User with email (${email}) already exists`,
      });

    const hashedPassword = await hash(password, 12);

    connectToDB();
    await UsersSchema.create({ username, email, password: hashedPassword });
    return new NextResponse("Success");
  } catch (e) {
    console.log(e);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
