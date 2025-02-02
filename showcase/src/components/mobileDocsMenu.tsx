import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export const MobileDocsMenu = ({
  menuList,
}: {
  menuList: Array<Record<string, any>>;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-lg">
        {menuList.map((doc, index) => (
          <DropdownMenuItem key={index} className="pl-3 pr-5">
            <a href={doc.url} className="w-full">
              {doc.frontmatter.title}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
