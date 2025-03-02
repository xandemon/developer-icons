import { Copy, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const INSTALL_COMMAND = "npm i developer-icons";

const InstallCmd = () => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    let popoverTimeout: NodeJS.Timeout | undefined;
    if (showPopover) {
      popoverTimeout = setTimeout(() => setShowPopover(false), 2000);
    }
    return () => {
      if (popoverTimeout) {
        clearTimeout(popoverTimeout);
      }
    };
  }, [showPopover]);

  const copyInstallCmd = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setIsError(false);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setIsError(true);
    } finally {
      setShowPopover(true);
    }
  };

  return (
    <span className="flex items-center gap-3 border border-zinc-600 dark:border-zinc-500 rounded-lg px-4 py-2 text-zinc-600 dark:text-zinc-400">
      <Terminal size={18} />
      <pre>{INSTALL_COMMAND}</pre>
      <Popover
        open={showPopover}
        onOpenChange={(value: boolean) => setShowPopover(value)}
      >
        <PopoverTrigger asChild>
          <Copy
            size={18}
            className="cursor-pointer hover:opacity-80"
            onClick={copyInstallCmd}
          />
        </PopoverTrigger>
        <PopoverContent
          className={`max-w-fit rounded-full py-2 text-sm opacity-70 ${isError ? "bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100" : ""}`}
        >
          {isError ? (
            <span className="flex items-center gap-1 w-full">
              Failed to copy. Please copy manually.
            </span>
          ) : (
            <span className="flex items-center gap-1 w-full">
              Copied{" "}
              <strong className="text-sky-500 dark:text-sky-300">
                {INSTALL_COMMAND}
              </strong>{" "}
              🎉
            </span>
          )}
        </PopoverContent>
      </Popover>
    </span>
  );
};

export { InstallCmd };
