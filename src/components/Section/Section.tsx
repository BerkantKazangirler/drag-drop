import { HeaderTypesI, MissionsTypesI } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../../services/fetchDatas";
import { Header } from "./Header";
import { MissionCard } from "../MissionCard";
import { useTodoContext } from "../../context/TodoContext";

interface SectionProp {
  sectionData: HeaderTypesI;
  allRefetch: any;
}

const Section = ({ sectionData, allRefetch }: SectionProp) => {
  const { updateMission } = useTodoContext();

  const { data } = useQuery({
    queryKey: ["todo", sectionData.id],
    queryFn: () =>
      fetchTodo({
        status: sectionData.id,
      }),
  });

  const handleDrop = (event: any) => {
    event.preventDefault();
    const missionId = event.dataTransfer.getData("missionId");

    const targetStatusId = event.currentTarget.getAttribute("data-status-id");
    if (missionId) {
      allRefetch();
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
      <Header data={sectionData} />
      <div className="flex flex-col px-4 py-4 gap-3 rounded-xl">
        {data?.map((m: MissionsTypesI) => (
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
