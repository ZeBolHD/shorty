import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidURL(str: string) {
  let url;
  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  console.log(url.pathname);
  return url.protocol === "http:" || url.protocol === "https:";
}
