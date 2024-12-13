import { offerings } from "@/consts";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST() {
  const transaction = client.transaction();

  offerings.forEach((offering) => {
    transaction.createOrReplace({
      _type: "offerings",
      _id: offering.id.toString(),
      id: offering.id,
      name: offering.name,
      type: offering.type,
      createdAt: offering.createdAt,
      updatedAt: offering.updatedAt,
    });
  });

  await transaction.commit();

  return NextResponse.json(
    { message: "Data migrated successfully" },
    { status: 200 }
  );
}
