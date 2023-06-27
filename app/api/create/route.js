import { NextResponse } from "next/server";

export async function GET(req) {
  const response = await fetch("http://localhost:8000/items");
  const data = await response.json();

  return NextResponse.json({ data });
}
