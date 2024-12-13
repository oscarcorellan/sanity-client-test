import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

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

    dummyData.forEach((accessory) => {
      transaction.createOrReplace({
        _type: "accessory",
        _id: accessory.id,
        name: accessory.name,
        description: accessory.description,
        price: accessory.price,
        availability: accessory.availability,
        frame: {
          _type: "reference",
          _ref: accessory.legacyId,
        },
      });
    });

    await transaction.commit();

    return NextResponse.json(
      { message: "Data migrated successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Narrow down the type of `error` using type assertion
    if (error instanceof Error) {
      console.error("Error during migration:", error.message);
      return NextResponse.json(
        { message: "Data migration failed", error: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error occurred:", error);
      return NextResponse.json(
        { message: "Data migration failed", error: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
