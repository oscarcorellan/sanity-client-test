const AccessoriesPage = () => {
  return (
    <div className="min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        Accessory Inventory
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
                Description
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Price ($)
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Availability
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                Frame Legacy ID
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessoriesPage;