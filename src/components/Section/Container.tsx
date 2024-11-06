import { useQuery } from "@tanstack/react-query";
import { fetchSections } from "../../services/fetchDatas";
import { HeaderTypesI } from "../../types";
import Section from "./Section";

const SectionContainer = () => {
  const { data, isLoading, isFetching } = useQuery<HeaderTypesI[]>({
    queryKey: ["sections"],
    queryFn: () => fetchSections().then((res) => res),
  });

  if (isLoading || isFetching) {
    return <div>loading</div>;
  }

  return (
    <div className="flex gap-4 items-start">
      {data?.map((m) => (
        <Section sectionData={m} />
      ))}
    </div>
  );
};

export default SectionContainer;
