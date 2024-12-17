import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

import { offeringOnPractices } from "@/consts";

export async function POST() {
  const transaction = client.transaction();

  offeringOnPractices.forEach((item) => {
    transaction.createOrReplace({
      _type: "offeringOnPractices",
      _id: `${item.practiceId}-${item.offeringId}`,
      practiceId: {
        _type: "reference",
        _ref: item.practiceId.toString(),
      },
      offeringId: {
        _type: "reference",
        _ref: item.offeringId.toString(),
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
