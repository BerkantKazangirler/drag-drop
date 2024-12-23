import { createContext, useContext } from "react";
import { useContainerContext } from "./ContainerContext";

type TodoContextType = {
  updateMission: (missionId: string, targetStatusId: string) => void;
};

const TodoContext = createContext<TodoContextType>({
  updateMission: () => "",
});

export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }: any) => {
  const { refetchTodos } = useContainerContext();

  const updateMission = (missionId: string, targetStatusId: string) => {
    if (targetStatusId !== null) {
      fetch("http://localhost:3000/todos/" + missionId, {
        method: "PATCH",
        body: JSON.stringify({
          status: targetStatusId,
        }),
      })
        .then((res) => res.json())
        .finally(() => refetchTodos());
    }
  };

  return (
    <TodoContext.Provider value={{ updateMission }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
