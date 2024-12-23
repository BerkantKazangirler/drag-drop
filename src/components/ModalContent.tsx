import { TfiClose } from "react-icons/tfi";
import { MissionsTypesI } from "../types";
import { useEffect, useRef } from "react";

interface ModalProps {
  onClose: any;
  data: MissionsTypesI;
}

export default function ModalContent({ onClose, data }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const escapeListener = document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") onClose();
    });

    const outsideClickListener = wrapperRef.current?.addEventListener(
      "click",
      (e: any) => {
        const clickInside = e.composedPath().includes(modalRef.current);
        if (!clickInside) onClose();
      }
    );

    return () => {
      removeEventListener("keyup", escapeListener);
      removeEventListener("click", outsideClickListener);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="flex w-screen h-screen top-0 fixed left-0 backdrop-blur-sm items-center justify-center "
    >
      <div
        ref={modalRef}
        className="flex flex-col p-6 gap-2 w-[450px] bg-gray-100 text-black relative rounded-md"
      >
        <div className="flex flex-row justify-between gap-6">
          <span className="text-lg font-semibold">{data.title}</span>
          <button className="right-2" onClick={onClose} type="button">
            <TfiClose />
          </button>
        </div>
        <span>{data.description}</span>
        <span className="text-sm">
          Kategori : {data.status == "list_001" && "To Do"}
          {data.status == "list_002" && "In Progress"}
          {data.status == "list_003" && "Done"}
          {data.status == "list_004" && "Completed"}
        </span>
        <span className="text-sm">Öncelik : {data.priority}</span>
        <div className="flex gap-1 flex-row  text-sm">
          Etiketler :
          <span className="text-blue-400">
            {data.tags[1] && data.tags[0] + " - " + data.tags[1]}
          </span>
        </div>
        <span className="flex gap-1 flex-row text-sm">
          Bitiş Tarihi : {data.due_date}
        </span>
      </div>
    </div>
  );
}
