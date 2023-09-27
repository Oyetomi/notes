import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex mb-5 text-red-200">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </div>
  );
};
export default NavBar;
