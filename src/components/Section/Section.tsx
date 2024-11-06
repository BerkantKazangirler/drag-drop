import { HeaderTypesI } from "../../types";
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

  return (
    <div className="bg-element-bg/60 rounded-xl flex max-h-[900px] overflow-scroll flex-col h-screen w-[400px]">
      <Header data={sectionData} />
      <div className="flex flex-col px-4 py-4 gap-6 rounded-xl">
        {data?.map((m: any) => (
          <MissionCard data={m} />
        ))}
      </div>
    </div>
  );
};

export default Section;
