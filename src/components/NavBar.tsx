import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 text-gray-800 dark:text-gray-200">
      <Link href="/frames">Frames</Link>
    </div>
  );
};
