import { MigrateButton } from "@/components/migrateButton";
import { TableRow } from "@/components/tableRow";
import { dummyData } from "@/consts/dummyData";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        Frame Inventory
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                ID
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Name
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Material
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Shape
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Size
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Color
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Gender
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Brand
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Price ($)
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Availability
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow dummyData={dummyData} />
          </tbody>
        </table>
      </div>
      <MigrateButton dummyData={dummyData} />
    </div>
  );
}
