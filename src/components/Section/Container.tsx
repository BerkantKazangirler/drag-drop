import { useQuery } from "@tanstack/react-query";
import { fetchSections } from "../../services/fetchDatas";
import { HeaderTypesI } from "../../types";
import Section from "./Section";
import { Loading } from "./Loading";

const SectionContainer = () => {
  const {
    data: SectionData,
    isLoading,
    isFetching,
    refetch: allRefetch,
  } = useQuery<HeaderTypesI[]>({
    queryKey: ["sections"],
    queryFn: () => fetchSections().then((res) => res),
  });

  if (isLoading || isFetching) {
    return (
      <div className="flex gap-4 items-start flex-row">
        {Array(4).map((index) => (
          <div
            className="bg-element-bg/60 rounded-xl animate-pulse flex max-h-[900px] overflow-y-auto overflow-x-hidden flex-col h-screen w-[400px]"
            key={index}
          >
            <Loading />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-start">
      {SectionData?.map((m, index) => (
        <div key={m.id || index} id={m.id}>
          <Section sectionData={m} allRefetch={allRefetch} />
        </div>
      ))}
    </div>
  );
};

export default SectionContainer;
