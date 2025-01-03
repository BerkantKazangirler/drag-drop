import { FaCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HeaderTypesI } from "../../types";
import classNames from "classnames";
import { useTodoContext } from "../../context/TodoContext";

interface HeaderProp {
  data: HeaderTypesI;
  count: any;
}

export const Header = ({ data, count }: HeaderProp) => {
  const styles = {
    list_001: {
      title: "list_001",
      border: "text-todo-blue",
      icon: "bg-element2-bg text-element-text",
      line: "border-element-text",
    },
    list_002: {
      title: "list_002",
      border: "text-orange-500",
      icon: "bg-orange-500 text-orange-200 ",
      line: "border-orange-500",
    },
    list_003: {
      title: "list_003",
      border: "text-low-tag",
      icon: "bg-low-tag text-orange-200",
      line: "border-low-tag",
    },
    list_004: {
      title: "list_004",
      border: "text-green-tag",
      icon: "bg-green-tag text-green-200",
      line: "border-green-tag",
    },
  } as any;
  const style = styles[data.id];

  const { setOpened, setSelectedSection } = useTodoContext();

  function test(id: any) {
    setOpened((t: any) => !t);
    setSelectedSection(id);
  }
  return (
    <>
      <div className="flex flex-row justify-between px-6 py-4">
        <div className="flex flex-row gap-2">
          <FaCircle
            className={classNames("self-center text-xs", style.border)}
          />
          <span className="text-lg">{data.name}</span>
          <span className="text-black/50 bg-gray-300 rounded-full self-center px-2">
            {count}
          </span>
        </div>
        <GoPlus
          onClick={(e) => test(e.currentTarget.id)}
          id={style.title}
          className={classNames(
            "text-xl self-center rounded hover:cursor-pointer",
            style.icon
          )}
        />
      </div>
      <span
        className={classNames("border-t-4 self-center w-[350px]", style.line)}
      ></span>
    </>
  );
};
