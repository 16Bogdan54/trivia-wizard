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

export function formatTimeDelta(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const sec = Math.floor(seconds - hours * 3600 - minutes * 60);

  const parts = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }
  if (sec > 0) {
    parts.push(`${sec}s`);
  }
  return parts.join(" ");
}
