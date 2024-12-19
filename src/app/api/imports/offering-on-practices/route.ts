import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

import { offeringOnPractices } from "@/consts";

// Define the batch size
const BATCH_SIZE = 100;

export async function GET() {
  try {
    const totalItems = offeringOnPractices.length;
    let processedItems = 0;

    // Fetch all unique practice and offering IDs
    const uniquePracticeIds = [
      ...new Set(offeringOnPractices.map((item) => item.practiceId.toString())),
    ];
    const uniqueOfferingIds = [
      ...new Set(offeringOnPractices.map((item) => item.offeringId.toString())),
    ];

    const existingDocs = await client.fetch(`*[_id in $ids]{_id}`, {
      ids: [...uniquePracticeIds, ...uniqueOfferingIds],
    });

    console.log("--EXISTING DOCS", existingDocs);

    const existingDocIds = existingDocs.map((doc: { _id: string }) => doc._id);

    // Process data in batches
    for (let i = 0; i < totalItems; i += BATCH_SIZE) {
      const batch = offeringOnPractices.slice(i, i + BATCH_SIZE);

      // Filter valid items in the batch
      const validItems = batch.filter(
        (item) =>
          existingDocIds.includes(item.practiceId.toString()) &&
          existingDocIds.includes(item.offeringId.toString())
      );

      if (validItems.length > 0) {
        const transaction = client.transaction();

        // Add valid items to the transaction
        validItems.forEach((item) => {
          transaction.createOrReplace({
            _type: "offeringOnPractices",
            _id: `${item.practiceId}-${item.offeringId}`,
            title: `${item.practiceId}-${item.offeringId}`,
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

        // Commit the transaction for the current batch
        await transaction.commit();
        processedItems += validItems.length;

        console.log(
          `Batch ${i / BATCH_SIZE + 1}: ${validItems.length} items migrated.`
        );
      } else {
        console.log(`Batch ${i / BATCH_SIZE + 1}: No valid items to process.`);
      }
    }

    return NextResponse.json(
      {
        message: "Data migration completed",
        totalProcessed: processedItems,
        totalSkipped: totalItems - processedItems,
      },
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
