import { SlOptions } from "react-icons/sl";
import { Badge } from "./Badge";
import { MissionsTypesI } from "../types";
// import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useState } from "react";
// import {
//   Description,
//   Dialog,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";
// import { TfiClose } from "react-icons/tfi";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

interface props {
  data: MissionsTypesI;
}

export const MissionCard = ({ data }: props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // function close() {
  //   setIsDialogOpen(false);
  // }

  return (
    <>
      <div
        className="bg-white p-4 rounded-xl"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1">
            {data.tags.map((m, index) => {
              return <Badge tag={m} key={index} />;
            })}
          </div>
          {/* <Badge tag={data.tags} /> */}
          <SlOptions className="self-center mr-2" />
        </div>
        <span className="font-medium text-lg justify-start flex">
          {data?.title}
        </span>
        <p className="text-black/60 text-start">{data.description}</p>
      </div>
      {isDialogOpen &&
        createPortal(
          <ModalContent onClose={() => setIsDialogOpen(false)} data={data} />,
          document.body
        )}
    </>

    // <>
    //   <div
    //     className="bg-white p-4 rounded-xl"
    //     onClick={() => setIsDialogOpen((t) => !t)}
    //   >
    //     <div className="flex flex-row justify-between">
    //       <div className="flex flex-row gap-1">
    //         {data.tags.map((m, index) => {
    //           return <Badge tag={m} key={index} />;
    //         })}
    //       </div>
    //       {/* <Badge tag={data.tags} /> */}
    //       <SlOptions className="self-center mr-2" />
    //     </div>
    //     <span className="font-medium text-lg justify-start flex">
    //       {data?.title}
    //     </span>
    //     <p className="text-black/60 text-start">{data.description}</p>
    //   </div>
    //   <Dialog
    //     open={isDialogOpen}
    //     as="div"
    //     onClose={close}
    //     className="flex z-20 bg-slate-500 w-96 h-auto items-start rounded-xl absolute top-[40%] shadow-2xl right-[45%]"
    //   >
    //     {/* // <MenuItems className="flex z-20 bg-slate-500 w-96 h-auto items-start rounded-xl absolute top-[40%] shadow-2xl right-[45%]"> */}
    //     <DialogPanel>
    //       <div className="flex flex-col p-4 gap-2">
    //         <button
    //           className="absolute right-2"
    //           onClick={() => setIsDialogOpen(false)}
    //         >
    //           <TfiClose />
    //         </button>
    //         <DialogTitle className="text-white text-lg text-center">
    //           {data.title}
    //         </DialogTitle>
    //         <Description className="text-white/80">
    //           {data.description}
    //         </Description>
    //         <span className="text-white/80 text-sm">
    //           Kategori : {data.status == "list_001" && "To Do"}
    //           {data.status == "list_002" && "In Progress"}
    //           {data.status == "list_003" && "Done"}
    //           {data.status == "list_004" && "Completed"}
    //         </span>
    //         <span className="text-white/80 text-sm">
    //           Öncelik : {data.priority}
    //         </span>
    //         <div className="flex gap-1 flex-row text-white/80 text-sm">
    //           Etiketler :
    //           <span className="text-blue-400">
    //             {data.tags[1] && data.tags[0] + " - " + data.tags[1]}
    //           </span>
    //         </div>
    //         <span className="flex text-white/80 gap-1 flex-row text-sm">
    //           Bitiş Tarihi : {data.due_date}
    //         </span>
    //       </div>
    //     </DialogPanel>
    //   </Dialog>
    // </>

    // <Menu>
    //   <MenuButton>
    //     <div
    //       className="bg-white p-4 rounded-xl"
    //       onClick={() => console.log(data)}
    //     >
    //       <div className="flex flex-row justify-between">
    //         <div className="flex flex-row gap-1">
    //           {data.tags.map((m, index) => {
    //             return <Badge tag={m} key={index} />;
    //           })}
    //         </div>
    //         {/* <Badge tag={data.tags} /> */}
    //         <SlOptions className="self-center mr-2" />
    //       </div>
    //       <span className="font-medium text-lg justify-start flex">
    //         {data?.title}
    //       </span>
    //       <p className="text-black/60 text-start">{data.description}</p>
    //     </div>
    //   </MenuButton>
    //   <MenuItems className="flex z-20 bg-slate-500 w-96 h-auto items-start rounded-xl absolute top-[40%] shadow-2xl right-[45%]">
    //     <div className="flex flex-col p-4 gap-2">
    //       <span className="text-white text-lg text-center">{data.title}</span>
    //       <p className="text-white/80">{data.description}</p>
    //       <span className="text-white/80 text-sm">
    //         Kategori : {data.status == "list_001" && "To Do"}
    //         {data.status == "list_002" && "In Progress"}
    //         {data.status == "list_003" && "Done"}
    //         {data.status == "list_004" && "Completed"}
    //       </span>
    //       <span className="text-white/80 text-sm">
    //         Öncelik : {data.priority}
    //       </span>
    //       <div className="flex gap-1 flex-row text-white/80 text-sm">
    //         Etiketler :
    //         <span className="text-blue-400">
    //           {data.tags[1] && data.tags[0] + " - " + data.tags[1]}
    //         </span>
    //       </div>
    //       <span className="flex text-white/80 gap-1 flex-row text-sm">
    //         Bitiş Tarihi : {data.due_date}
    //       </span>
    //     </div>
    //   </MenuItems>
    // </Menu>
  );
};
