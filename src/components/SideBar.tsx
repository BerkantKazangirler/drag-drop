import {
  IoHomeOutline,
  IoSettingsOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BiMessageDetail } from "react-icons/bi";
import { CiSquarePlus } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { MdLightbulb } from "react-icons/md";
import classNames from "classnames";

interface SideBarProp {
  collapse: any;
}

export const SideBar = ({ collapse }: SideBarProp) => {
  return (
    <div
      className={classNames(
        "flex flex-col border-r-2 gap-10 border-border-color",
        {
          "min-w-72": !collapse,
          "w-[7.4rem]": collapse,
        }
      )}
    >
      <div
        className={classNames("flex flex-col px-5 gap-10 mt-8", {
          "items-center": collapse,
        })}
      >
        <div className="flex flex-row gap-4">
          <IoHomeOutline className="text-black/60 text-2xl" />
          {!collapse && (
            <button className="text-black/50 text-xl" type="button">
              Home
            </button>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <BiMessageDetail className="text-black/60 text-2xl" />
          {!collapse && (
            <button className="text-black/50 text-xl" type="button">
              Messages
            </button>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <LiaClipboardListSolid className="text-black/60 text-2xl" />
          {!collapse && (
            <button className="text-black/50 text-xl" type="button">
              Tasks
            </button>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <IoPeopleOutline className="text-black/60 text-2xl" />
          {!collapse && (
            <button className="text-black/50 text-xl" type="button">
              Members
            </button>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <IoSettingsOutline className="text-black/60 text-2xl" />
          {!collapse && (
            <button className="text-black/50 text-xl" type="button">
              Settings
            </button>
          )}
        </div>
      </div>
      {!collapse && (
        <>
          <span className="border-t self-center border-border-color w-[250px]"></span>
          <div className="flex flex-col px-5 gap-2">
            <div className="flex flex-row justify-between">
              <span className="uppercase font-medium pb-5 text-black/50 text-sm">
                my projects
              </span>
              <CiSquarePlus className="text-xl text-black/70" />
            </div>
            <div className="flex flex-row justify-between px-2 py-3 rounded-lg bg-active-side/10">
              <div className="flex flex-row gap-3">
                <FaCircle className="self-center text-green-btn text-xs" />
                <span className="font-semibold text-base">Mobile App</span>
              </div>
              <SlOptions className="self-center mr-2" />
            </div>
            <div className="flex flex-row gap-3 px-2 py-3">
              <FaCircle className="self-center text-orange-btn text-xs" />
              <span className="text-base">Website Redesign</span>
            </div>
            <div className="flex flex-row gap-3 px-2 py-3">
              <FaCircle className="self-center text-purple-btn text-xs" />
              <span className="text-base">Design System</span>
            </div>
            <div className="flex flex-row gap-3 px-2 py-3">
              <FaCircle className="self-center text-blue-btn text-xs" />
              <span className="text-base">Wireframes</span>
            </div>
          </div>

          <div className="bg-element-bg self-center text-center w-60 h-64 bottom-10 absolute rounded-3xl">
            <div className="w-fit mx-auto bg-element-bg p-4 rounded-full bottom-5 relative">
              <MdLightbulb className="text-yellow-bg text-4xl" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium">Thoughts Time</span>
              <p className="max-w-[200px] text-sm text-black/70 mx-auto">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <button
                className="bg-white w-[210px] mx-auto py-3 rounded-md font-medium mt-2"
                type="button"
              >
                Write a message
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
