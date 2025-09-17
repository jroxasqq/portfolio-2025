import Link from "next/link";

const Header = () => {
  return (
    <div className="h-20 w-screen p-6 bg-gray-300 gap-6 justify-end items-center flex">
      <Link href="/">welcome</Link>
      <Link href="/projects">projects</Link>
    </div>
  );
};

export default Header;
