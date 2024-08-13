import Image from "next/image";
import Tooltip from "./Tooltip";

import squ from "public/profile_img/squ.jpg";

const StaffCard = () => {
  return (
    <div className="flex flex-col col-span-1  justify-center bg-white p-4 rounded-lg shadow-sm w-60 hover:shadow-lg transition-shadow duration-300">
      <div>
        <Image
          src={squ}
          alt="Profile Image"
          className="w-60 h-60 rounded-md mb-2"
          width={60}
          height={60}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">Squirrel Snow</h3>
        <h4 className="text-gray-700 text-md">She/Her</h4>
        <hr className="border-gray-700 my-2" />
      </div>
      <div className="flex items-center justify-around space-x-2">
        <Tooltip text="Loves painting">
          <span
            role="img"
            aria-label="hobby1"
            className="text-2xl cursor-pointer"
          >
            🎨
          </span>
        </Tooltip>
        <Tooltip text="Avid reader">
          <span
            role="img"
            aria-label="hobby2"
            className="text-2xl cursor-pointer"
          >
            📚
          </span>
        </Tooltip>
        <Tooltip text="Enjoys running">
          <span
            role="img"
            aria-label="hobby3"
            className="text-2xl cursor-pointer"
          >
            🏃‍♀️
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default StaffCard;
