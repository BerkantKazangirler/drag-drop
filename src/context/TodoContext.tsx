import { createContext, useContext } from "react";

type TodoContextType = {
  updateMission: (missionId: string, targetStatusId: string) => void;
};

const TodoContext = createContext<TodoContextType>({
  updateMission: () => "",
});

export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }: any) => {
  const updateMission = (missionId: string, targetStatusId: string) => {
    if (targetStatusId !== null) {
      fetch("http://localhost:3000/todos/" + missionId, {
        method: "PATCH",
        body: JSON.stringify({
          status: targetStatusId,
        }),
      }).then((res) => res.json());
    }
  };

  return (
    <TodoContext.Provider value={{ updateMission }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
