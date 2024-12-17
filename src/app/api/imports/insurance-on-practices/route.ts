import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

import { insuranceOnPractices } from "@/consts";

export async function POST() {
  const transaction = client.transaction();

  insuranceOnPractices.forEach((item) => {
    transaction.createOrReplace({
      _type: "insuranceOnPractices",
      _id: `${item.practiceId}-${item.insuranceId}`,
      practiceId: {
        _type: "reference",
        _ref: item.practiceId.toString(),
      },
      insuranceId: {
        _type: "reference",
        _ref: item.insuranceId.toString(),
      },
    });
  });

  try {
    await transaction.commit();
    return NextResponse.json(
      { message: "Data migrated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Migration failed:", error);
    return NextResponse.json(
      { message: "Migration failed", error },
      { status: 500 }
    );
  }
}
