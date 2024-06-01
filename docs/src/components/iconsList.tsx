import DI from "developer-icons";
import { useMemo, useState } from "react";
import { Copy, Copyright, SearchIcon, X } from "lucide-react";
import type { IconDataType } from "../../../lib/iconsData";
import { generateIconCompName } from "../../../lib/utils";
import { useDebounce } from "@/lib/hooks";
import { Badge } from "./ui/badge";
import { publicBaseUrl } from "@/lib/utils";

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

  const copyComponent = (iconName: string) => {
    const compName = generateIconCompName(iconName);
    navigator.clipboard.writeText(`<${compName} />`);
  };

  return (
    <section className="w-full flex flex-col gap-3">
      <div className="relative w-full">
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
      <div className="grid grid-cols-auto-fit gap-4 overflow-auto pr-1">
        {filteredIcons.map((icon, index) => {
          const DynamicIcon = DI[generateIconCompName(icon.name)];
          return (
            <div
              key={index}
              className="w-full max-w-64 h-44 border border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2"
            >
              <DynamicIcon size={50} />
              <p className="font-semibold">{icon.name}</p>
              <div className="flex items-center gap-1 flex-wrap ">
                {icon.categories.map((category, index) => (
                  <a
                    key={index}
                    href={`${publicBaseUrl}/icons/${category
                      .replace("DevOps & AI/ML", "DevOps")
                      .replaceAll(" ", "-")}`}
                  >
                    <Badge
                      variant={"secondary"}
                      className="font-normal text-xs"
                    >
                      {category}
                    </Badge>
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 text-zinc-400">
                <Copy
                  size={18}
                  className="hover:text-zinc-300 cursor-pointer"
                  onClick={() => copyComponent(icon.name)}
                />
                {/* <a href={svgIcon} download={icon.name}>
                  <Download
                    size={18}
                    className="hover:text-zinc-300 cursor-pointer"
                  />
                </a> */}
                <a href={icon.url} target="_blank" rel="noreferrer">
                  <Copyright
                    size={18}
                    className="hover:text-zinc-300 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
