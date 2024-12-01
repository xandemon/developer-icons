import DI from "developer-icons";
import { useState } from "react";
import { Copy, Copyright, Download } from "lucide-react";
import type { IconDataType } from "../../../../lib/iconsData";
import { generateIconCompName } from "../../../../lib/utils";
import { Badge } from "./badge";
import { Loader } from "./loader";
import { downloader } from "@/lib/utils";
import { publicBaseUrl } from "@/config";

export const IconCard = ({ icon }: { icon: IconDataType }) => {
  const [downloadLoading, setDownloadLoading] = useState(false);

  const DynamicIcon = DI[generateIconCompName(icon.name)];

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

  return (
    <div className="w-full h-44 border border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2">
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
            <Badge variant={"secondary"} className="font-normal text-xs">
              {category}
            </Badge>
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 text-zinc-400">
        <Copy
          size={18}
          className="hover:text-yellow-300 cursor-pointer"
          onClick={() => copyComponent(icon.name)}
        />
        <Loader loading={downloadLoading} className="w-[18px] h-[18px]">
          <Download
            size={18}
            className="hover:text-blue-300 cursor-pointer"
            onClick={() => downloadIcon(icon.path)}
          />
        </Loader>
        <a href={icon.url} target="_blank" rel="noreferrer">
          <Copyright size={18} className="hover:text-rose-300 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
