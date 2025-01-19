import { Copy, Terminal } from "lucide-react";

const copyInstallCmd = () => {
  navigator.clipboard.writeText("npm i developer-icons");
};

const InstallCmd = () => {
  return (
    <span className="flex items-center gap-3 border border-zinc-600 dark:border-zinc-500 rounded-lg px-4 py-2 text-zinc-600 dark:text-zinc-400">
      <Terminal size={18} />
      <pre>npm i developer-icons</pre>
      <Copy
        size={18}
        className="cursor-pointer hover:opacity-80"
        onClick={copyInstallCmd}
      />
    </span>
  );
};

export { InstallCmd };
