import type { Frame } from "@/types/data";

type TableRowProps = {
  dummyData: Frame[];
};

export const TableRow = ({ dummyData }: TableRowProps) => {
  return (
    <>
      {dummyData.map((frame) => (
        <tr
          key={frame.id}
          className="even:bg-gray-100 dark:even:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
            {frame.id}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
            {frame.name}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
            {frame.material}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
            {frame.shape}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
            {frame.size}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
            {frame.color}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
            {frame.gender}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
            {frame.brand}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-right">
            {frame.price}
          </td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
            {frame.availability ? "✅" : "❌"}
          </td>
        </tr>
      ))}
    </>
  );
};
