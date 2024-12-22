import { ImageEnum } from "@/assets";
import { LightBulbIcon, SearchIcon } from "@/components/Icons";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { NAV_BARS } from "@/constants/nav.const";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between py-8">
        <div>
          <Image src={ImageEnum.logo} alt="Logo" width={158} height={30} />
        </div>
        <div className="flex items-center gap-10">
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
        <div className="flex items-center gap-10">
          <div className="flex items-center bg-input rounded px-2 py-2 pl-4 gap-3">
            <Input
              className="border-none outline-none p-0 h-5 focus:outline-none focus-visible:ring-0 shadow-none"
              placeholder="Search"
            />
            <SearchIcon className="cursor-pointer" />
          </div>
          <div>
            <Switch
              checkedIcon={<LightBulbIcon />}
              uncheckedIcon={<LightBulbIcon />}
              className="data-[state=checked]:bg-blue"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
