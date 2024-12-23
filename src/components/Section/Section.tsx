import { HeaderTypesI, MissionsTypesI } from "../../types";
import { Header } from "./Header";
import { MissionCard } from "../MissionCard";
import { useTodoContext } from "../../context/TodoContext";
import { useContainerContext } from "../../context/ContainerContext";

interface SectionProp {
  sectionData: HeaderTypesI;
  allRefetch: any;
  status: string;
}

const Section = ({ sectionData, status }: SectionProp) => {
  const { updateMission } = useTodoContext();

  const { todoData } = useContainerContext();

  const handleDrop = (event: any) => {
    event.preventDefault();
    const missionId = event.dataTransfer.getData("missionId");

    const targetStatusId = event.currentTarget.getAttribute("data-status-id");
    if (missionId) {
      updateMission(missionId, targetStatusId);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      data-status-id={sectionData.id}
      className="bg-element-bg/60 rounded-xl flex flex-col max-h-[900px] h-screen w-[400px] overflow-auto"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Header
        data={sectionData}
        count={todoData?.filter((t) => t.status === status).length}
      />
      <div className="flex flex-col px-4 py-4 gap-3 rounded-xl">
        {todoData
          ?.filter((t) => t.status === status)
          ?.map((m: MissionsTypesI) => (
            <div
              key={m.id}
              id={m.id}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("missionId", m.id)}
            >
              <MissionCard data={m} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Section;
