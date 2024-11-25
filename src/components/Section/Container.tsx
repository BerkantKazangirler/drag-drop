import { useQuery } from "@tanstack/react-query";
import { fetchSections } from "../../services/fetchDatas";
import { HeaderTypesI } from "../../types";
import Section from "./Section";
import { Loading } from "./Loading";

const SectionContainer = () => {
  const { data, isLoading, isFetching } = useQuery<HeaderTypesI[]>({
    queryKey: ["sections"],
    queryFn: () => fetchSections().then((res) => res),
  });

  if (isLoading || isFetching) {
    return (
      <div className="flex gap-4 items-start flex-row">
        <div className="bg-element-bg/60 rounded-xl animate-pulse flex max-h-[900px] overflow-y-auto overflow-x-hidden flex-col h-screen w-[400px]">
          <Loading />
        </div>
        <div className="bg-element-bg/60 rounded-xl flex max-h-[900px] animate-pulse overflow-y-auto overflow-x-hidden flex-col h-screen w-[400px]">
          <Loading />
        </div>
        <div className="bg-element-bg/60 rounded-xl flex max-h-[900px] animate-pulse overflow-y-auto overflow-x-hidden flex-col h-screen w-[400px]">
          <Loading />
        </div>
        <div className="bg-element-bg/60 rounded-xl flex max-h-[900px] animate-pulse overflow-y-auto overflow-x-hidden flex-col h-screen w-[400px]">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-start">
      {data?.map((m, index) => (
        <div key={m.id || index} id={m.id}>
          <Section sectionData={m} />
        </div>
      ))}
    </div>
  );
};

export default SectionContainer;
