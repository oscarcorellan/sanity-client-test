import { client } from "@/sanity/lib/client";
import type { NextApiResponse } from "next";

import { dummyData } from "@/consts/dummyData";

export async function POST(res: NextApiResponse) {
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
  res.status(200).json({ message: "Data migrated successfully" });
}
