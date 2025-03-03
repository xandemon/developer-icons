import { Copy, CopyCheck, CopyX, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const INSTALL_COMMAND = "npm i developer-icons";

const InstallCmd = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (isCopied || isError) {
      setIsLoading(true);
      timeout = setTimeout(() => {
        setIsCopied(false);
        setIsError(false);
        setIsLoading(false);
      }, 2000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isCopied, isError]);

  const copyInstallCmd = async () => {
    setIsLoading(true);
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setIsError(false);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setIsError(true);
      setIsCopied(false);
    } finally {
      setIsLoading(false);
    }
  };

  let icon;
  if (isCopied) {
    icon = <CopyCheck size={18} className="text-green-500" />;
  } else if (isError) {
    icon = <CopyX size={18} className="text-red-500" />;
  } else {
    icon = <Copy size={18} className="cursor-pointer hover:opacity-80" />;
  }

  return (
    <span className="flex items-center gap-3 border border-zinc-600 dark:border-zinc-500 rounded-lg px-4 py-2 text-zinc-600 dark:text-zinc-400">
      <Terminal size={18} />
      <pre>{INSTALL_COMMAND}</pre>

      <button
        onClick={copyInstallCmd}
        disabled={isLoading}
        className="transition-opacity duration-200"
      >
        {icon}
      </button>
    </span>
  );
};

export { InstallCmd };
