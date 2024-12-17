import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

import { insurances } from "@/consts";

export async function POST() {
  const transaction = client.transaction();

  insurances.forEach((insurance) => {
    transaction.createOrReplace({
      _type: "insurances",
      _id: insurance.id.toString(),
      id: insurance.id,
      name: insurance.name,
      createdAt: insurance.createdAt,
      updatedAt: insurance.updatedAt,
    });
  });

  await transaction.commit();

  return NextResponse.json(
    { message: "Insurances data migrated successfully" },
    { status: 200 }
  );
}
