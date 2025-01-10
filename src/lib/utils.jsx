import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind classes
export const cn = (...inputs) => {
  return twMerge(clsx(...inputs));
};
