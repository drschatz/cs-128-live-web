import Image from "next/image";
import Link from "next/link";
import nextIMG from "public/classLogo.jpg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <Image
          src={nextIMG}
          alt="CS128-LIVE logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      <span className="font-bold dark:font-semibold text-lg md:text-xl hover:text-accent">
        /* CS128 LIVE */
      </span>
    </Link>
  );
};

export default Logo;
