import Image from "next/image";
import Link from "next/link";
import nextIMG from "public/classLogo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
        <Image
          src={nextIMG}
          alt="CS128-LIVE logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl hover:text-accent">
      &#47;&#42;CS128 LIVE &#42;&#47;
      </span>
    </Link>
  );
};

export default Logo;
