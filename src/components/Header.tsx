import Link from "next/link";

const Header = () => {
  return (
    <div className="h-20 w-screen p-6 gap-6 items-center flex fixed">
      <Link className="text-4xl" href="/">
        ◕‿◕
      </Link>
    </div>
  );
};

export default Header;
