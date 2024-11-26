import { HeaderTypesI, MissionsTypesI } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../../services/fetchDatas";
import { Header } from "./Header";
import { MissionCard } from "../MissionCard";
import { useEffect, useState } from "react";

type SectionProp = {
  sectionData: HeaderTypesI;
};

const Section = ({ sectionData }: SectionProp) => {
  const [sectionDatas, setSectionData] = useState<MissionsTypesI[]>([]);
  const { data } = useQuery({
    queryKey: ["todo", sectionData.id],
    queryFn: () =>
      fetchTodo({
        status: sectionData.id,
      }).then((res) => res),
  });

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const missionId = event.dataTransfer.getData("missionId");

    if (sectionDatas) {
      const newMission: MissionsTypesI = {
        id: missionId,
        project_id: sectionData.id,
        title: `${sectionDatas[Number(missionId)].title}`,
        description: `${sectionDatas[Number(missionId)].description}`,
        estimated_hours: sectionDatas[Number(missionId)].estimated_hours,
        assigned_to: sectionDatas[Number(missionId)].assigned_to,
        status: `${sectionDatas[Number(missionId)].status}`,
        priority: `${sectionDatas[Number(missionId)].priority}`,
        due_date: `${sectionDatas[Number(missionId)].due_date}`,
        tags: sectionDatas[Number(missionId)].tags,
      };

      setSectionData((prev) => [...prev, newMission]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    setSectionData(data);
  }, [data]);

  return (
    <div
      className="bg-element-bg/60 rounded-xl flex max-h-[900px] overflow-y-auto overflow-x-hidden flex-col h-screen w-[400px]"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Header data={sectionData} />
      <div className="flex flex-col px-4 py-4 gap-3 rounded-xl">
        {sectionDatas?.map((m: MissionsTypesI, index: number) => (
          <div key={index}>
            <MissionCard data={m} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
