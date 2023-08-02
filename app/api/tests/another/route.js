import { NextResponse } from "next/server";

export async function POST(req, res) {
  // const body = await req.json();
  console.log('something');
  return new NextResponse("got body");
}
