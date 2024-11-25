import { Badge } from "./Badge";
import { MissionsTypesI } from "../types";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

interface props {
  data: MissionsTypesI;
}

export const MissionCard = ({ data }: props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("missionId", data.id);
    console.log("Dragging MissionCard:", data.id);
  };

  return (
    <>
      <div
        className="bg-white p-4 rounded-xl hover:cursor-grabbing"
        onClick={() => setIsDialogOpen(true)}
        draggable
        onDragStart={handleDragStart}
      >
        <div className="flex flex-row gap-1">
          {data.tags.map((m, index) => {
            return (
              <div key={index}>
                <Badge tag={m} />
              </div>
            );
          })}
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
  );
};
