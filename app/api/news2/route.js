import news from "@/models/news";
import { NextResponse } from "next/server";
import connectmongodb from "@/utils/mongodb";

export async function GET() {
  try {
    await connectmongodb();
    const newsWithDay = await news.aggregate([
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d", // Use lowercase 'd' for days
              date: "$createdAt",
            },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id": 1 },
      },
    ]);
    return NextResponse.json(newsWithDay);
  } catch (error) {
    console.error("Aggregation error:", error);
    return NextResponse.json({ error: "Aggregation failed" });
  }
}