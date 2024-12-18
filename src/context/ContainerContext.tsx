import { createContext, useContext } from "react";
import { HeaderTypesI } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchSections } from "../services/fetchDatas";

type ContainerContextType = {
  SectionData: HeaderTypesI[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
  allRefetch: () => void;
};

const ContainerContext = createContext<ContainerContextType>({
  SectionData: [],
  isLoading: false,
  isFetching: false,
  allRefetch: () => {},
});

export const useContainerContext = () => useContext(ContainerContext);

const ContainerProvider = ({ children }: any) => {
  const {
    data: SectionData,
    isLoading,
    isFetching,
    refetch: allRefetch,
  } = useQuery<HeaderTypesI[]>({
    queryKey: ["sections"],
    queryFn: () => fetchSections().then((res) => res),
  });

  return (
    <ContainerContext.Provider
      value={{ SectionData, isLoading, isFetching, allRefetch }}
    >
      {children}
    </ContainerContext.Provider>
  );
};

export default ContainerProvider;
