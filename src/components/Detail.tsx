import { GoPencil, GoChevronDown } from "react-icons/go";
import { IoMdLink } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import { IoPeopleOutline, IoGrid } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaFolderMinus } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import { BiMessageDetail } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

export const Detail = () => {
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
        <div className="flex flex-row w-full gap-4">
          <button className="border flex flex-row text-lg border-black/50 font-medium px-4 gap-2 rounded-lg py-1 text-black/50">
            <CiFilter className="text-2xl" /> Filter
            <GoChevronDown className="text-xl my-auto" />
          </button>
          <button className="border flex flex-row text-lg border-black/50 font-medium px-4 gap-2 rounded-lg py-1 text-black/50">
            <BsCalendarDate className="text-sm my-auto" /> Today
            <GoChevronDown className="text-xl my-auto" />
          </button>
        </div>
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
        <div className="bg-element-bg/60 rounded-xl flex flex-col h-screen w-[400px]">
          <div className="flex flex-row justify-between px-6 py-4">
            <div className="flex flex-row gap-2">
              <FaCircle className="self-center text-todo-blue text-xs" />
              <span className="text-lg">To Do</span>
              <span className="text-black/50 bg-gray-300 rounded-full self-center px-2">
                4
              </span>
            </div>
            <GoPlus className="text-xl bg-element2-bg text-element-text self-center rounded" />
          </div>
          <span className="border-t-4 self-center border-element-text w-[350px]"></span>
          <div className="flex flex-col px-4 py-4 gap-6 rounded-xl">
            <div className="bg-white p-4 rounded-xl">
              <div className="flex flex-row justify-between">
                <span className="bg-low-tag/20 text-low-tag w-fit px-2 py-1 rounded-lg">
                  Low
                </span>
                <SlOptions className="self-center mr-2" />
              </div>
              <span className="font-medium text-lg">Brainstorming</span>
              <p className="text-black/60">
                Brainstorming brings team members' diverse experience into play.
              </p>
              <div className="flex flex-row gap-3 justify-end mt-4">
                <div className="flex flex-row gap-2">
                  <BiMessageDetail className="self-center text-black/60" />
                  <span className="text-black/60">12 comments</span>
                </div>
                <div className="flex flex-row gap-2">
                  <FaFolderMinus className="self-center text-black/60" />
                  <span className="text-black/60">0 files</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className="flex flex-row justify-between">
                <span className="bg-high-tag/10 text-high-tag w-fit px-2 py-1 rounded-lg">
                  High
                </span>
                <SlOptions className="self-center mr-2" />
              </div>
              <span className="font-medium text-lg">Research</span>
              <p className="text-black/60">
                User research helps you to create an optimal product for users.
              </p>
              <div className="flex flex-row gap-3 justify-end mt-4">
                <div className="flex flex-row gap-2">
                  <BiMessageDetail className="self-center text-black/60" />
                  <span className="text-black/60">10 comments</span>
                </div>
                <div className="flex flex-row gap-2">
                  <FaFolderMinus className="self-center text-black/60" />
                  <span className="text-black/60">3 files</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-element-bg/60 rounded-xl flex flex-col h-screen w-[400px]">
          <div className="flex flex-row px-6 py-4">
            <div className="flex flex-row gap-2">
              <FaCircle className="self-center text-orange-btn text-xs" />
              <span className="text-lg">On Progress</span>
              <span className="text-black/50 bg-gray-300 rounded-full self-center px-2">
                3
              </span>
            </div>
          </div>
          <span className="border-t-4 self-center border-orange-btn w-[350px]"></span>
          <div className="flex flex-col px-4 py-4 gap-6 rounded-xl">
            <div className="bg-white p-4 rounded-xl">
              <div className="flex flex-row justify-between">
                <span className="bg-low-tag/20 text-low-tag w-fit px-2 py-1 rounded-lg">
                  Low
                </span>
                <SlOptions className="self-center mr-2" />
              </div>
              <span className="font-medium text-lg">Brainstorming</span>
              <p className="text-black/60">
                Brainstorming brings team members' diverse experience into play.
              </p>
              <div className="flex flex-row gap-3 justify-end mt-4">
                <div className="flex flex-row gap-2">
                  <BiMessageDetail className="self-center text-black/60" />
                  <span className="text-black/60">12 comments</span>
                </div>
                <div className="flex flex-row gap-2">
                  <FaFolderMinus className="self-center text-black/60" />
                  <span className="text-black/60">0 files</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className="flex flex-row justify-between">
                <span className="bg-high-tag/10 text-high-tag w-fit px-2 py-1 rounded-lg">
                  High
                </span>
                <SlOptions className="self-center mr-2" />
              </div>
              <span className="font-medium text-lg">Research</span>
              <p className="text-black/60">
                User research helps you to create an optimal product for users.
              </p>
              <div className="flex flex-row gap-3 justify-end mt-4">
                <div className="flex flex-row gap-2">
                  <BiMessageDetail className="self-center text-black/60" />
                  <span className="text-black/60">10 comments</span>
                </div>
                <div className="flex flex-row gap-2">
                  <FaFolderMinus className="self-center text-black/60" />
                  <span className="text-black/60">3 files</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-element-bg/60 rounded-xl flex flex-col h-screen w-[400px]">
          <div className="flex flex-row px-6 py-4">
            <div className="flex flex-row gap-2">
              <FaCircle className="self-center text-blue-btn text-xs" />
              <span className="text-lg">Done</span>
              <span className="text-black/50 bg-gray-300 rounded-full self-center px-2">
                3
              </span>
            </div>
          </div>
          <span className="border-t-4 self-center border-completed-tag w-[350px]"></span>
          <div className="flex flex-col px-4 py-4 gap-6 rounded-xl">
            <div className="bg-white p-4 rounded-xl">
              <div className="flex flex-row justify-between">
                <span className="bg-completed-tag/20 text-completed-tag w-fit px-2 py-1 rounded-lg">
                  Completed
                </span>
                <SlOptions className="self-center mr-2" />
              </div>
              <span className="font-medium text-lg">Brainstorming</span>
              <p className="text-black/60">
                Brainstorming brings team members' diverse experience into play.
              </p>
              <div className="flex flex-row gap-3 justify-end mt-4">
                <div className="flex flex-row gap-2">
                  <BiMessageDetail className="self-center text-black/60" />
                  <span className="text-black/60">12 comments</span>
                </div>
                <div className="flex flex-row gap-2">
                  <FaFolderMinus className="self-center text-black/60" />
                  <span className="text-black/60">0 files</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className="flex flex-row justify-between">
                <span className="bg-completed-tag/10 text-completed-tag w-fit px-2 py-1 rounded-lg">
                  High
                </span>
                <SlOptions className="self-center mr-2" />
              </div>
              <span className="font-medium text-lg">Research</span>
              <p className="text-black/60">
                User research helps you to create an optimal product for users.
              </p>
              <div className="flex flex-row gap-3 justify-end mt-4">
                <div className="flex flex-row gap-2">
                  <BiMessageDetail className="self-center text-black/60" />
                  <span className="text-black/60">10 comments</span>
                </div>
                <div className="flex flex-row gap-2">
                  <FaFolderMinus className="self-center text-black/60" />
                  <span className="text-black/60">3 files</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};