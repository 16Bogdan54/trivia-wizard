import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName: string): string {
  const names: string[] = fullName.split(" ");

  const firstNameInitial: string = names[0][0].toUpperCase();
  const surnameInitial: string = names[names.length - 1][0].toUpperCase();

  return firstNameInitial + surnameInitial;
}
