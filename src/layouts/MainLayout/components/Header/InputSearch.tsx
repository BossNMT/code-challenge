import { SearchIcon } from "@/components/Icons";
import { Input } from "@/components/ui/input";

const InputSearch = () => {
  return (
    <div className="flex items-center bg-input rounded px-2 py-2 pl-4 gap-3">
      <Input
        className="border-none outline-none p-0 h-5 focus:outline-none focus-visible:ring-0 shadow-none"
        placeholder="Search"
      />
      <SearchIcon className="cursor-pointer" />
    </div>
  );
};

export default InputSearch;
