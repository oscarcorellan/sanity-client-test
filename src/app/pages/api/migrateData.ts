import { client } from "@/sanity/lib/client";
import { NextApiRequest, NextApiResponse } from "next";

import { dummyData } from "@/consts/dummyData";

const migrateData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
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
    } catch (error) {
      res.status(500).json({ message: "Error migrating data", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default migrateData;
