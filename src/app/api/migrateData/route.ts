import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { dummyData } = await req.json();

    if (!Array.isArray(dummyData) || dummyData.length === 0) {
      return NextResponse.json(
        { message: "Invalid data provided" },
        { status: 400 }
      );
    }

    const transaction = client.transaction();

    dummyData.forEach((frame) => {
      transaction.createOrReplace({
        _type: "frame",
        _id: frame.entityId,
        ...frame,
      });
    });

    await transaction.commit();
    return NextResponse.json(
      { message: "Data migrated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Migration error:", error);
    return NextResponse.json(
      { message: "Failed to migrate data" },
      { status: 500 }
    );
  }
}
