import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

import { displayOnPractices } from "@/consts";

export async function POST() {
  const transaction = client.transaction();

  displayOnPractices.forEach((item) => {
    transaction.createOrReplace({
      _type: "displayOnPractices",
      _id: `${item.practiceId}-${item.displayId}`,
      practiceId: {
        _type: "reference",
        _ref: item.practiceId.toString(),
      },
      displayId: {
        _type: "reference",
        _ref: item.displayId.toString(),
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
