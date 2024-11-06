import { SlOptions } from "react-icons/sl";
import { BiMessageDetail } from "react-icons/bi";
import { FaFolderMinus } from "react-icons/fa";
import { Badge } from "./Badge";
import { MissionsTypesI } from "../types";

interface props {
  data: MissionsTypesI;
}

export const MissionCard = ({ data }: props) => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1">
          {data.tags.map((m, index) => {
            return <Badge tag={m} key={index} />;
          })}
        </div>
        {/* <Badge tag={data.tags} /> */}
        <SlOptions className="self-center mr-2" />
      </div>
      <span className="font-medium text-lg">{data?.title}</span>
      <p className="text-black/60">
        Brainstorming brings team members' diverse experience into play.
      </p>
      <div className="flex flex-row gap-3 justify-end mt-4">
        <div className="flex flex-row gap-2">
          <BiMessageDetail className="self-center text-black/60" />
          <span className="text-black/60">12 comments</span>
        </div>
        <div className="flex flex-row gap-2">
          <FaFolderMinus className="self-center text-black/60" />
          <span className="text-black/60">0 files</span>
        </div>
      </div>
    </div>
  );
};
