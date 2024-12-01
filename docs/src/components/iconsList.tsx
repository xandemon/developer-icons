import { useMemo, useState } from "react";
import { SearchIcon, X } from "lucide-react";
import type { IconDataType } from "../../../lib/iconsData";
import { IconCard } from "./ui/iconCard";
import { useDebounce } from "@/lib/hooks";

export const IconsList = ({ iconsData }: { iconsData: IconDataType[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery.toLowerCase(), 300);

  const filteredIcons = useMemo(
    () =>
      iconsData.filter(
        (icon) =>
          icon.keywords.some((key) =>
            key.toLowerCase().includes(debouncedSearch)
          ) || icon.name.toLowerCase().includes(debouncedSearch)
      ),
    [iconsData, debouncedSearch]
  );

  return (
    <section className="relative w-full flex flex-col h-full max-h-full overflow-scroll">
      <div className="sticky top-0 bg-zinc-900 pb-3">
        <div className="relative top-0 w-full">
          <SearchIcon
            className="absolute top-1/2 left-3 -translate-y-1/2"
            size={16}
          />
          <input
            type="text"
            placeholder="Search developer icons"
            className="w-full p-2 px-5 pl-10 rounded-xl bg-transparent border border-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
          />
          {!!searchQuery && (
            <X
              className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-500 hover:text-zinc-400 cursor-pointer"
              size={16}
              onClick={() => setSearchQuery("")}
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-auto-fit gap-4 pr-1">
        {filteredIcons.map((icon, index) => (
          <IconCard key={index} icon={icon} />
        ))}
      </div>
    </section>
  );
};
