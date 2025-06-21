// import * as DI from "../../../../dist/main";
import * as DI from "developer-icons";
import React, { useEffect, useState, type ReactNode } from "react";
import { Copy, Copyright, Download } from "lucide-react";
import type { IconDataType } from "../../../../lib/iconsData";
import { generateIconCompName } from "../../../../lib/utils";
import { Badge } from "./badge";
import { Loader } from "./loader";
import { cn, downloader } from "@/lib/utils";
import { publicBaseUrl } from "@/config";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

type ActiveTooltipType = "copy" | "download" | "source" | undefined;

export const IconCard = ({ icon }: { icon: IconDataType }) => {
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<ActiveTooltipType>();

  const DynamicIcon = DI[generateIconCompName(icon.name)] as React.ElementType;

  const copyComponent = (iconName: string) => {
    const compName = generateIconCompName(iconName);
    navigator.clipboard.writeText(`<${compName} />`);
  };

  const downloadIcon = async (iconPath: string) => {
    setDownloadLoading(true);
    const response = await fetch(
      `https://raw.githubusercontent.com/xandemon/developer-icons/main/${iconPath}`
    );
    const data = await response.text();
    const blob = new Blob([data], {
      type: "image/svg+xml;charset=utf-8",
    });
    const blobUrl = URL.createObjectURL(blob);
    downloader(blobUrl, iconPath.substring(iconPath.lastIndexOf("/") + 1));
    setDownloadLoading(false);
  };

  useEffect(() => {
    let copyTimeout: NodeJS.Timeout;
    if (showCopied) {
      copyTimeout = setTimeout(() => setShowCopied(false), 2000);
      return () => copyTimeout && clearTimeout(copyTimeout);
    }
  }, [showCopied]);

  useEffect(() => {
    if (showCopied) {
      !!activeTooltip && setShowCopied(false);
    }
  }, [activeTooltip, showCopied]);

  return (
    <div className="w-full max-w-[300px] h-44 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 from-zinc-200/50 dark:from-zinc-950/25 to-zinc-200/75 dark:to-zinc-950/50 hover:bg-gradient-to-br group p-1.5 ">
      {DynamicIcon ? (
        <DynamicIcon
          size={50}
          className="group-hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] dark:group-hover:drop-shadow-[0_4px_4px_rgba(256,256,256,0.1)]"
        />
      ) : (
        <div className="text-red-500">Icon not found</div>
      )}
      <p className="w-full font-semibold text-center truncate">{icon.name}</p>
      <div className="flex items-center justify-center gap-1 flex-wrap ">
        {icon.categories.map((category, index) => (
          <a
            key={index}
            href={`${publicBaseUrl}/icons/${category
              .replace("DevOps & AI/ML", "DevOps")
              .replaceAll(" ", "-")}`}
          >
            <Badge
              variant={"secondary"}
              className="font-normal text-xs group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700"
            >
              {category}
            </Badge>
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 text-zinc-600 dark:text-zinc-400">
        <Popover
          open={showCopied}
          onOpenChange={(value) => setShowCopied(value)}
        >
          <ActionTooltip
            trigger={
              <PopoverTrigger asChild>
                <span
                  className="p-1 flex flex-center cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-300"
                  onClick={() => copyComponent(icon.name)}
                >
                  <Copy size={18} />
                </span>
              </PopoverTrigger>
            }
            content={"Copy Component"}
            action={"copy"}
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />
          <PopoverContent className="max-w-fit rounded-full py-2 text-sm opacity-70">
            <span className="flex items-center gap-1 w-full">
              Copied{" "}
              <strong className="text-sky-500 dark:text-sky-300">{`<${generateIconCompName(
                icon.name
              )} />`}</strong>
              🎉
            </span>
          </PopoverContent>
        </Popover>
        <Loader loading={downloadLoading} className="w-[18px] h-[18px]">
          <ActionTooltip
            trigger={
              <span
                className="p-1 flex flex-center cursor-pointer hover:text-blue-500 dark:hover:text-blue-300"
                onClick={() => downloadIcon(icon.path)}
              >
                <Download size={18} />
              </span>
            }
            content={"Download SVG"}
            action={"download"}
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />
        </Loader>
        <ActionTooltip
          trigger={
            <a
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "p-1 flex flex-center cursor-pointer hover:text-rose-500 dark:hover:text-rose-300",
                { "pointer-events-none": showCopied }
              )}
            >
              <Copyright size={18} />
            </a>
          }
          content={"Visit Source"}
          action={"source"}
          activeTooltip={activeTooltip}
          setActiveTooltip={setActiveTooltip}
        />
      </div>
    </div>
  );
};

const ActionTooltip = ({
  trigger,
  content,
  action,
  activeTooltip,
  setActiveTooltip,
}: {
  trigger: ReactNode;
  content: string | ReactNode;
  action: ActiveTooltipType;
  activeTooltip: ActiveTooltipType;
  setActiveTooltip: React.Dispatch<React.SetStateAction<ActiveTooltipType>>;
}) => {
  const closeTooltip = () => setActiveTooltip(undefined);

  return (
    <Tooltip open={activeTooltip === action}>
      <TooltipTrigger
        asChild
        onClick={closeTooltip}
        onMouseEnter={() => setActiveTooltip(action)}
        onMouseLeave={closeTooltip}
      >
        {trigger}
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="max-w-fit rounded-full py-2 px-5 text-sm opacity-75"
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
};
