import { Copy, Terminal } from "lucide-react";

const copyInstallCmd = () => {
  navigator.clipboard.writeText("npm i developer-icons");
};

const InstallCmd = () => {
  return (
    <span className="flex items-center gap-3 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-400">
      <Terminal size={18} />
      <pre>npm i developer-icons</pre>
      <Copy
        size={18}
        className="cursor-pointer hover:text-zinc-300"
        onClick={copyInstallCmd}
      />
    </span>
  );
};

export { InstallCmd };
