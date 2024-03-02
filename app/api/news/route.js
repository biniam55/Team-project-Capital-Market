
import news from "@/models/news";
import { NextResponse } from "next/server";
import connectmongodb from "@/utils/mongodb";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectmongodb();
  await news.create({ title, description });
  return NextResponse.json({ message: "news Created" }, { status: 201 });
}

export async function GET() {
  await connectmongodb();
  const newss = await news.find({});
  return NextResponse.json( newss);
}
