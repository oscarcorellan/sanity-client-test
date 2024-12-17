import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

import { displays } from "@/consts";

export async function POST() {
  const transaction = client.transaction();

  displays.forEach((display) => {
    transaction.createOrReplace({
      _type: "displays",
      _id: display.id.toString(),
      id: display.id,
      name: display.name,
      description: display.description,
      file: display.file,
      createdAt: display.createdAt,
      updatedAt: display.updatedAt,
    });
  });

  await transaction.commit();

  return NextResponse.json(
    { message: "Displays data migrated successfully" },
    { status: 200 }
  );
}
