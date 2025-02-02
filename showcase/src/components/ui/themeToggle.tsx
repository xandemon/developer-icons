import { useEffect, useState } from "react";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme as "light" | "dark");
  }, []);

  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className="border-none rounded-full"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Moon size={20} className="text-gray-900" />
      ) : (
        <Sun size={20} className="text-yellow-400" />
      )}
    </Button>
  );
};
