import { HeaderTypesI, MissionsTypesI, TagEnum } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../../services/fetchDatas";
import { Header } from "./Header";
import { MissionCard } from "../MissionCard";
import { useEffect, useState } from "react";

type SectionType = {
  sectionData: HeaderTypesI;
};

const Section = ({ sectionData }: SectionType) => {
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

    console.log(sectionDatas[0]);

    if (sectionDatas) {
      const newMission: MissionsTypesI = {
        id: missionId,
        project_id: sectionData.id,
        title: `Mission ${missionId}`,
        description: sectionDatas[Number(missionId)].description,
        estimated_hours: 0,
        assigned_to: [],
        status: "New",
        priority: "Low",
        due_date: new Date().toISOString(),
        tags: [TagEnum.AppStore],
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
            <MissionCard data={m} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
