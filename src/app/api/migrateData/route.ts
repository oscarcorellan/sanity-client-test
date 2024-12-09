import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

import { dummyData } from "@/consts/dummyData";

export async function POST() {
  const transaction = client.transaction();

  dummyData.forEach((frame) => {
    transaction.create({
      _type: "frame",
      _id: frame.id.toString(),
      name: frame.name,
      material: frame.material,
      shape: frame.shape,
      size: frame.size,
      color: frame.color,
      gender: frame.gender,
      brand: frame.brand,
      price: frame.price,
      availability: frame.availability,
    });
  });

  await transaction.commit();
  return NextResponse.json(
    { message: "Data migrated successfully" },
    { status: 200 }
  );
}
