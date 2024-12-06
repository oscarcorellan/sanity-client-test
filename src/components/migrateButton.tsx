"use client";

import { useState } from "react";
import type { Frame } from "@/types/data";

type MigrateButtonProps = {
  dummyData: Frame[];
};

export const MigrateButton = ({ dummyData }: MigrateButtonProps) => {
  const [isMigrating, setIsMigrating] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState<string | null>(null);

  const handleMigrate = async () => {
    setIsMigrating(true);
    setMigrationStatus(null);

    try {
      const response = await fetch("/api/migrateData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dummyData }),
      });

      const data = await response.json();

      if (response.ok) {
        setMigrationStatus("Data migrated successfully!");
      } else {
        setMigrationStatus(`Error: ${data.message}`);
      }
    } finally {
      setIsMigrating(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleMigrate}
        disabled={isMigrating}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {isMigrating ? "Migrating..." : "Migrate Data to Sanity"}
      </button>

      {migrationStatus && <p className="mt-4">{migrationStatus}</p>}
    </div>
  );
};
