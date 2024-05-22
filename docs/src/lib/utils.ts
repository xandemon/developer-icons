import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const publicBaseUrl = import.meta.env.VITE_PUBLIC_BASE_URL;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
