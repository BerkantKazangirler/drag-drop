import { createContext, useContext } from "react";
import { HeaderTypesI, MissionsTypesI } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchSections, fetchTodo } from "../services/fetchDatas";

type ContainerContextType = {
  SectionData: HeaderTypesI[] | undefined;
  todoData: MissionsTypesI[] | undefined;
  isLoading: boolean;
  isFetching: boolean;
  allRefetch: () => void;
  refetchTodos: () => void;
};

const ContainerContext = createContext<ContainerContextType>({
  SectionData: [],
  todoData: [],
  isLoading: false,
  isFetching: false,
  allRefetch: () => {},
  refetchTodos: () => {},
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

  const { data: todoData, refetch: refetchTodos } = useQuery({
    queryKey: ["todo"],
    queryFn: () => fetchTodo(),
  });

  return (
    <ContainerContext.Provider
      value={{
        SectionData,
        isLoading,
        refetchTodos,
        isFetching,
        allRefetch,
        todoData,
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
};

export default ContainerProvider;
