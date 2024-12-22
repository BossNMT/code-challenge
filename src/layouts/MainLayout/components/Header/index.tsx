import { ImageEnum } from "@/assets";
import { PATHS } from "@/constants";
import { NAV_BARS } from "@/constants/nav.const";
import Image from "next/image";
import Link from "next/link";
import SwitchMode from "./SwitchMode";
import SheetMenu from "./SheetMenu";
import InputSearch from "./InputSearch";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between py-8">
        <Link href={PATHS.HOME} className="dark:hidden">
          <Image src={ImageEnum.logo} alt="Logo" width={158} height={30} />
        </Link>
        <Link href={PATHS.HOME} className="hidden dark:block">
          <Image src={ImageEnum.logoDark} alt="Logo" width={158} height={30} />
        </Link>
        <div className="lg:flex items-center gap-10 hidden">
          {NAV_BARS.map((nav, index) => {
            return (
              <Link
                key={index}
                href={nav.path}
                className="font-normal text-base text-text"
              >
                {nav.title}
              </Link>
            );
          })}
        </div>
        <div className="lg:flex items-center gap-10 hidden">
          <InputSearch />
          <SwitchMode />
        </div>
        <div className="block lg:hidden">
          <SheetMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
