import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloader(url: string, filename: string) {
  const downloadEl = document.createElement("a");
  downloadEl.href = url;
  downloadEl.download = filename;
  document.body.appendChild(downloadEl);
  downloadEl.click();
  document.body.removeChild(downloadEl);
}
