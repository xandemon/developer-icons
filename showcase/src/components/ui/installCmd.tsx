import { Copy, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const copyInstallCmd = () => {
  navigator.clipboard.writeText("npm i developer-icons");
};

const InstallCmd = () => {
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    let copyTimeout;
    if (showCopied) {
      copyTimeout = setTimeout(() => setShowCopied(false), 2000);
    }
    return () => copyTimeout && clearTimeout(copyTimeout);
  }, [showCopied]);

  return (
    <span className="flex items-center gap-3 border border-zinc-600 dark:border-zinc-500 rounded-lg px-4 py-2 text-zinc-600 dark:text-zinc-400">
      <Terminal size={18} />
      <pre>npm i developer-icons</pre>
      <Popover open={showCopied} onOpenChange={(value) => setShowCopied(value)}>
        <PopoverTrigger asChild>
          <Copy
            size={18}
            className="cursor-pointer hover:opacity-80"
            onClick={() => {
              copyInstallCmd();
              setShowCopied(true);
            }}
          />
        </PopoverTrigger>
        <PopoverContent className="max-w-fit rounded-full py-2 text-sm opacity-70">
          <span className="flex items-center gap-1 w-full">
            Copied <strong className="text-sky-500 dark:text-sky-300">npm i developer-icons</strong> 🎉
          </span>
        </PopoverContent>
      </Popover>
    </span>
  );
};

export { InstallCmd };
