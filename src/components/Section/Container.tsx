import Section from "./Section";
import { Loading } from "./Loading";
import { useContainerContext } from "../../context/ContainerContext";

const SectionContainer = () => {
  const { isLoading, isFetching, SectionData, allRefetch } =
    useContainerContext();

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
          <Section status={m.id} sectionData={m} allRefetch={allRefetch} />
        </div>
      ))}
    </div>
  );
};

export default SectionContainer;
