import Image from "next/image";
import Tooltip from "./Tooltip";

import squ from "public/profile_img/squ.jpg";

const StaffCard = ({ imgSrc, name, pronouns, emojis = [] }) => {
  return (
    <div className="flex flex-col col-span-1 justify-center bg-white p-4 rounded-lg shadow-sm w-72 hover:shadow-lg transition-shadow duration-300">
      <div>
        <Image
          src={imgSrc}
          alt={`${name} Profile Image`}
          className="w-72 h-72 rounded-md mb-2"
          width={72}
          height={72}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4 className="text-gray-700 text-md">{pronouns}</h4>
        <hr className="border-gray-700 my-2" />
      </div>
      <div className="flex items-center justify-around space-x-2">
        {emojis.map((emoji, index) => (
          <Tooltip key={index} text={emoji.text}>
            <span
              role="img"
              aria-label={`hobby${index + 1}`}
              className="text-2xl cursor-pointer"
            >
              {emoji.symbol}
            </span>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default StaffCard;
