import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";

function Header() {
  return (
    <div>
      <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex items-center w-full md:3/4">
          <Link href="/" className="font-black text-ternary-light">
            Hotelzz
          </Link>

          <ul className="flex item-center ml-5 ">
            <li>
              <Link href="/auth">
                <FaUserCircle className="cursor-pointer" />
              </Link>
            </li>

            <li className="ml-2">
              <MdDarkMode className="cursor-pointer" />
            </li>
          </ul>
        </div>

        <ul className="flex item-center justify-around w-full md:1/4 mt-4 ">
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href=""> Home </Link>
          </li>
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href=""> Rooms </Link>
          </li>
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href=""> Contact </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
