import { HeaderTypesI, MissionsTypesI } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../../services/fetchDatas";
import { Header } from "./Header";
import { MissionCard } from "../MissionCard";

type SectionType = {
  sectionData: HeaderTypesI;
};

const Section = ({ sectionData }: SectionType) => {
  const { data } = useQuery({
    queryKey: ["todo", sectionData.id],
    queryFn: () =>
      fetchTodo({
        status: sectionData.id,
      }).then((res) => res),
  });

  const onDrop = (event: any) => {
    const item = event;
    console.log("Dropped item:", item);
  };
  const allowDrop = (event: any) => {
    event.preventDefault();
  };

  return (
    <div
      className="bg-element-bg/60 rounded-xl flex max-h-[900px] overflow-y-auto overflow-x-hidden flex-col h-screen w-[400px]"
      onDragOver={(event) => allowDrop(event)}
    >
      <Header data={sectionData} />
      <div className="flex flex-col px-4 py-4 gap-3 rounded-xl">
        {data?.map((m: MissionsTypesI, index: number) => (
          <div key={index}>
            <MissionCard data={m} onDrop={(event: any) => onDrop(event)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
