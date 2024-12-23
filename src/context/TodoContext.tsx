import { createContext, useContext, useState } from "react";
import { useContainerContext } from "./ContainerContext";
import { IoMdClose } from "react-icons/io";

type TodoContextType = {
  setOpened: any;
  setSelectedSection: any;
  updateMission: (missionId: string, targetStatusId: string) => void;
};

const TodoContext = createContext<TodoContextType>({
  setOpened: false,
  setSelectedSection: "",
  updateMission: () => "",
});

export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }: any) => {
  const [opened, setOpened] = useState(Boolean);
  const [selectedSection, setSelectedSection] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [öncelik, setÖncelik] = useState("Low");
  const { refetchTodos } = useContainerContext();

  const tarih = new Date();
  const ay = tarih.getMonth();
  const yil = tarih.getFullYear();
  const gün = tarih.getUTCDate();

  const takvim = yil + "-" + ay + "-" + gün;

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

  const addMission = () => {
    const select1 = document.querySelector("#etiket") as HTMLSelectElement;
    const select2 = document.querySelector("#etiket2") as HTMLSelectElement;
    const proje = document.querySelector("#proje") as HTMLSelectElement;

    if (select1 && select2) {
      if (selectedSection !== null) {
        fetch("http://localhost:3000/todos/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            project_id: proje?.value,
            title: title,
            description: desc,
            estimated_hours: 10,
            assigned_to: ["user_004"],
            status: selectedSection,
            priority: öncelik,
            due_date: takvim,
            tags: [select1.value, select2.value],
          }),
        })
          .then((res) => res.json())
          .finally(() => refetchTodos())
          .finally(() => setOpened(false));
      }
    }
  };

  return (
    <TodoContext.Provider
      value={{ updateMission, setOpened, setSelectedSection }}
    >
      {children}
      {opened && (
        <div className="flex w-screen h-screen top-0 fixed left-0 backdrop-blur-sm items-center justify-center">
          <div className="flex flex-col p-6 gap-2 w-[450px] bg-gray-100 text-black relative rounded-md">
            <div className="flex  flex-row w-full justify-between">
              <span className="font-semibold">Yeni Todo Oluştur</span>
              <IoMdClose
                onClick={() => setOpened(false)}
                className="hover:cursor-pointer"
              />
            </div>
            <div className="flex flex-row gap-2">
              <label htmlFor="ad">Başlık</label>
              <input
                type="text"
                id="ad"
                className="outline-none rounded-lg indent-2"
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-row gap-2">
              <label htmlFor="desc">Açıklama</label>
              <input
                type="text"
                id="descs"
                className="outline-none rounded-lg indent-2"
                onChange={(e) => setDesc(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-row gap-2">
              <span>Etiketler</span>
              <select id="etiket">
                <option value="Backend">Backend</option>
                <option value="Offline">Offline</option>
                <option value="UI">UI</option>
                <option value="Training">Training</option>
                <option value="Documentation">Documentation</option>
                <option value="Release">Release</option>
                <option value="AppStore">App Store</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Integration">Integration</option>
                <option value="Social Media">Social Media</option>
                <option value="Backup">Backup</option>
                <option value="Database">Database</option>
                <option value="Form">Form</option>
                <option value="Reporting">Reporting</option>
                <option value="DataAnalysis">Data Analysis</option>
                <option value="Security">Security</option>
                <option value="QA">QA</option>
                <option value="Localization">Localization</option>
                <option value="Debugging">Debugging</option>
                <option value="Migration">Migration</option>
                <option value="Feedback">Feedback</option>
                <option value="Content">Content</option>
                <option value="Web">Web</option>
                <option value="Optimization">Optimization</option>
                <option value="Notification">Notification</option>
                <option value="Bug Fix">Bug Fix</option>
                <option value="Testing">Testing</option>
                <option value="Communication">Communication</option>
                <option value="SEO">SEO</option>
              </select>
              <select id="etiket2">
                <option value="Backend">Backend</option>
                <option value="Offline">Offline</option>
                <option value="UI">UI</option>
                <option value="Training">Training</option>
                <option value="Documentation">Documentation</option>
                <option value="Release">Release</option>
                <option value="AppStore">App Store</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Integration">Integration</option>
                <option value="Social Media">Social Media</option>
                <option value="Backup">Backup</option>
                <option value="Database">Database</option>
                <option value="Form">Form</option>
                <option value="Reporting">Reporting</option>
                <option value="DataAnalysis">Data Analysis</option>
                <option value="Security">Security</option>
                <option value="QA">QA</option>
                <option value="Localization">Localization</option>
                <option value="Debugging">Debugging</option>
                <option value="Migration">Migration</option>
                <option value="Feedback">Feedback</option>
                <option value="Content">Content</option>
                <option value="Web">Web</option>
                <option value="Optimization">Optimization</option>
                <option value="Notification">Notification</option>
                <option value="Bug Fix">Bug Fix</option>
                <option value="Testing">Testing</option>
                <option value="Communication">Communication</option>
                <option value="SEO">SEO</option>
              </select>
            </div>
            <div className="flex flex-row gap-2">
              <span>Öncelik</span>
              <select
                id="öncelik"
                onChange={(e) => setÖncelik(e.currentTarget.value)}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="flex flex-row gap-2">
              <span>Proje</span>
              <div className="flex flex-row gap-2">
                <label htmlFor="proje1">
                  <input type="radio" name="proje" id="proje1" />
                  Proje 1
                </label>
                <label htmlFor="proje2">
                  <input
                    type="radio"
                    name="proje"
                    id="proje2"
                    value="project_002"
                  />
                  Proje 2
                </label>
              </div>
            </div>
            <button className="bg-blue-300 p-2 rounded-xl" onClick={addMission}>
              Kaydet
            </button>
          </div>
        </div>
      )}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
