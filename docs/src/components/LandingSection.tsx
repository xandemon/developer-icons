import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-full py-4">
      <div className="flex flex-col gap-4">
        <Badge className="tracking-widest">v3.1.0</Badge>
        <p className="text-5xl font-bold leading-tight">
          <span className="text-sky-600">Ready-to-use</span>
          <br />
          customizable icons
        </p>
        <p className="text-2xl font-medium opacity-80">
          Made for the developers.
        </p>
        <div className="flex items-center gap-3 pt-4">
          <a href="/icons">
            <Button className="px-5">Browse all icons</Button>
          </a>
          <a href="/docs">
            <Button variant="secondary" className="px-5">
              Read Docs
            </Button>
          </a>
          <a
            href="https://github.com/xandemon/developer-icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="px-5">
              Github
            </Button>
          </a>
        </div>
      </div>

      <div className="rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 w-full h-[350px] max-w-[45%]"></div>
    </div>
  );
};

export default HeroSection;
