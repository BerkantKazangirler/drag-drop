import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CiSearch, CiCalendar, CiSquareQuestion } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";

export const Header = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="flex justify-between h-[88px] border-b-2 border-border-color">
      <div className="flex flex-row gap-20">
        <div className="flex flex-row w-72 items-center justify-between border-r-2 px-3 border-border-color">
          <div className="flex flex-row items-center gap-1">
            <img src={"./public/assets/logo.png"} className="h-14" />
            <span
              className="font-medium text-xl"
              onClick={() => setCollapse(true)}
            >
              Project M.
            </span>
          </div>
          <MdKeyboardDoubleArrowLeft className="text-2xl mr-4 text-black/60" />
        </div>
        <div className="flex flex-row items-center w-[500px] ">
          <CiSearch className="absolute text-2xl text-black/50 ml-2 mr-2" />
          <input
            type="text"
            placeholder="Search for anything..."
            className="bg-input-bg/60 h-12 rounded-lg indent-9 w-full"
          />
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-row gap-4 items-center">
          <CiCalendar className="text-3xl text-black/70" />
          <CiSquareQuestion className="text-3xl text-black/70" />
          <IoMdNotificationsOutline className="text-3xl text-black/70" />
        </div>
        <Menu>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col">
              <span>Anima Agrawal</span>
              <span className="text-black/60 text-end">U.P, İndia</span>
            </div>
            <img
              src={"./public/assets/user.png"}
              className="rounded-full h-12 w-fit"
            />
            <MenuButton>
              <GoChevronDown className="mr-3" />
            </MenuButton>
            <MenuItems className="absolute mt-36 w-52">
              <div className="flex flex-col text-center border-2 border-gray-700 text-white p-2 rounded-xl bg-zinc-800">
                <span>Ayarlar</span>
                <span>Çıkış Yap</span>
              </div>
            </MenuItems>
          </div>
        </Menu>
      </div>
    </div>
  );
};
