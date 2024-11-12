import { TfiClose } from "react-icons/tfi";
import { MissionsTypesI } from "../types";

interface props {
  onClose: any;
  data: MissionsTypesI;
}

export default function ModalContent({ onClose, data }: props) {
  return (
    <div className="flex modal z-20 bg-slate-500 w-96 h-auto items-start rounded-xl absolute top-[40%] shadow-2xl right-[45%]">
      <div className="flex flex-col p-4 gap-2">
        <button className="absolute right-2" onClick={onClose} type="button">
          <TfiClose />
        </button>
        <span className="text-white text-lg text-center">{data.title}</span>
        <span className="text-white/80">{data.description}</span>
        <span className="text-white/80 text-sm">
          Kategori : {data.status == "list_001" && "To Do"}
          {data.status == "list_002" && "In Progress"}
          {data.status == "list_003" && "Done"}
          {data.status == "list_004" && "Completed"}
        </span>
        <span className="text-white/80 text-sm">Öncelik : {data.priority}</span>
        <div className="flex gap-1 flex-row text-white/80 text-sm">
          Etiketler :
          <span className="text-blue-400">
            {data.tags[1] && data.tags[0] + " - " + data.tags[1]}
          </span>
        </div>
        <span className="flex text-white/80 gap-1 flex-row text-sm">
          Bitiş Tarihi : {data.due_date}
        </span>
      </div>
    </div>
  );
}
