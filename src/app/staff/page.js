import StaffCard from "../support/StaffCard";

import squ from "public/profile_img/squ.jpg";
import Emilia from "public/profile_img/Emilia_Daniels.jpg";
import Lumi from "public/profile_img/Lumi_Xu.png";
import Sarah from "public/profile_img/Sarah_Dowden.jpeg";
import Vani from "public/profile_img/Vani_Ramesh.jpg";
import Jule from "public/profile_img/Jule_Schatz.JPG";

const PeoplePage = () => {
  const instructorList = [
    {
      imgSrc: Jule,
      name: "Jule Schatz",
      pronouns: "She/Her",
      emojis: [
        { text: "I often paint in my free time.", symbol: "🎨" },
        { text: "I have a lego problem...", symbol: "👷‍♀️" },
        {
          text: "I started college wanting to major in atmospheric science. Now I have 3 computer science degrees!",
          symbol: "⛅",
        },
        { text: "I make the best chocolate chip cookies.", symbol: "🍪" },
      ],
    },
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
  ];
  const staffList = [
    {
      imgSrc: Emilia,
      name: "Emilia Daniels",
      pronouns: "She/Her",
      emojis: [
        { text: "Matcha enthusiast :D", symbol: "🍵" },
        { text: "I enjoy both listening to and playing music", symbol: "🎶" },
        { text: "I love all things arts and crafts", symbol: "🎨" },
        {
          text: "I'm half Filipino and heavily involved in the Philippine Student Association on campus!",
          symbol: "🇵🇭",
        },
      ],
    },
    {
      imgSrc: Lumi,
      name: "Lumi Xu",
      pronouns: "She/Her",
      emojis: [
        {
          text: "I’ve just started training for my first half marathon!",
          symbol: "🏃‍♀️",
        },
        { text: "Have you seen them in campus town?", symbol: "🦝" },
        {
          text: "Hope you enjoy the course and get something special from it :)",
          symbol: "㊗",
        },
      ],
    },
    {
      imgSrc: Sarah,
      name: "Sarah Dowden",
      pronouns: "She/Her",
      emojis: [
        { text: "I am on the UIUC women's rugby team", symbol: "🏉" },
        {
          text: "I love hiking and exploring around the Pacific Northwest",
          symbol: "⛰",
        },
        { text: "My favorite dinosaur is the ankylosaurus", symbol: "🦕" },
      ],
    },
    {
      imgSrc: Vani,
      name: "Vani Ramesh",
      pronouns: "She/Her",
      emojis: [
        { text: "I'm an extreme foodie :)", symbol: "🍲" },
        { text: "I love reading!", symbol: "📚" },
        { text: "I love baking in my freetime", symbol: "🧁" },
        { text: "I love learning about culture and history", symbol: "🪷" },
      ],
    },
  ];
  return (
    <div>
      <div className="mb-8 text-center relative w-full h-[24vh] bg-pink-600 ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Staffs
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
      </div>
      <div className="container mb-10">
        <h1 className="text-3xl font-bold mb-4 text-accent" id="contact">
          Instructor
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {instructorList.map((staff, index) => (
            <StaffCard
              key={index}
              imgSrc={staff.imgSrc}
              name={staff.name}
              pronouns={staff.pronouns}
              emojis={staff.emojis}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="text-3xl font-bold mb-4 text-accent" id="contact">
          Staff
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      </div>
    </div>
  );
};

export default PeoplePage;
