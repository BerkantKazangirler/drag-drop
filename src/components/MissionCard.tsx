import { Badge } from "./Badge";
import { MissionsTypesI } from "../types";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

interface MissionProps {
  data: MissionsTypesI;
}

export const MissionCard = ({ data }: MissionProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("missionId", data.id);
  };

  return (
    <>
      <div
        className="bg-white p-4 rounded-xl hover:cursor-grabbing"
        onClick={() => setIsDialogOpen(true)}
        draggable
        onDragStart={handleDragStart}
        id={data.id}
      >
        <div className="flex flex-row gap-1">
          {data.tags &&
            data.tags.map((m, index) => (
              <div key={index}>
                <Badge tag={m} />
              </div>
            ))}
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
