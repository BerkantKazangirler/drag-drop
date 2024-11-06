import { IoMdLink } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import { IoPeopleOutline, IoGrid } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { GoPencil, GoChevronDown } from "react-icons/go";
import SectionContainer from "../components/Section/Container";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

const Overview = () => {
  return (
    <div className="flex flex-col px-20 pt-20 gap-20 w-full">
      <div className="flex flex-row gap-8">
        <span className="font-medium text-5xl">Mobile App</span>
        <div className="flex flex-row gap-4">
          <button className="p-1 h-fit bg-element2-bg text-element-text rounded">
            <GoPencil />
          </button>
          <button className="p-1 h-fit bg-element2-bg text-element-text rounded">
            <IoMdLink />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <Menu>
          <div className="flex flex-row w-full gap-4">
            <MenuButton>
              <button className="border flex flex-row text-lg border-black/50 font-medium px-4 gap-2 rounded-t-lg py-1 text-black/50">
                <CiFilter className="text-2xl" /> Filter
                <GoChevronDown className="text-xl my-auto" />
              </button>
            </MenuButton>
            <MenuItems className="absolute mt-9">
              <div className="flex flex-col border-black/50 border">
                <button>Tarihe Göre</button>
              </div>
            </MenuItems>
            <button className="border flex flex-row text-lg border-black/50 font-medium px-4 gap-2 rounded-lg py-1 text-black/50">
              <BsCalendarDate className="text-sm my-auto" /> Today
              <GoChevronDown className="text-xl my-auto" />
            </button>
          </div>
        </Menu>
        <div className="flex flex-row gap-4">
          <button className="border flex flex-row text-lg border-black/50 font-medium px-4 gap-2 rounded-lg py-1 text-black/50">
            <IoPeopleOutline className="text-xl my-auto" /> Share
          </button>
          <span className="border-l"></span>
          <button className="flex flex-row text-lg font-medium px-2 gap-2 rounded-lg py-1 bg-element-text text-white">
            <IoGrid className="text-xl my-auto" />
          </button>
          <button className="flex flex-row text-lg font-medium px-2 gap-2 rounded-lg py-1 text-black/50">
            <HiOutlineViewGrid className="text-xl my-auto" />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <SectionContainer />
      </div>
    </div>
  );
};

export default Overview;
