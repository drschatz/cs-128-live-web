import StaffCard from "./StaffCard";
import squ from "public/profile_img/squ.jpg";

const staffList = [
  {
    imgSrc: squ,
    name: "Squirrel Snow",
    pronouns: "She/Her",
    emojis: [
      { text: "Loves painting", symbol: "🎨" },
      { text: "Avid reader", symbol: "📚" },
      { text: "Enjoys running", symbol: "🏃‍♀️" },
    ],
  },
  {
    imgSrc: squ,
    name: "Staff Member 2",
    pronouns: "He/Him",
    emojis: [
      { text: "Guitar player", symbol: "🎸" },
      { text: "Loves coding", symbol: "💻" },
      { text: "Enjoys hiking", symbol: "🥾" },
    ],
  },
];

const StaffList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {staffList.map((staff, index) => (
        <StaffCard
          key={index}
          imgSrc={staff.imgSrc}
          name={staff.name}
          pronouns={staff.pronouns}
          emojis={staff.emojis}
        />
      ))}
    </div>
  );
};

export default StaffList;
