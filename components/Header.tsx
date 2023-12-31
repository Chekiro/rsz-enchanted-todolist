"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header className="mb-9">
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-orange-400 to-[#ab41d5] rounded-md filter blur-3xl opacity-50 -z-50" />
        <Image
          src={logo}
          alt="logo"
          width={300}
          height={100}
          className="w-28 md:w-32pb-2 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              className=" p-2 flex-1 outline-none"
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Radek" size="50" round color="#5abddb" />
        </div>
      </div>
    </header>
  );
};

export default Header;
