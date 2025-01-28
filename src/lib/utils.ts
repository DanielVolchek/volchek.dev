import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const delay = async (number = 125) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, number);
  });
};

export const getWaitTime = (
  listLength: number,
  maxTime = 500,
  defaultWaitTime = 75,
) => Math.floor(Math.min(defaultWaitTime, maxTime / listLength));

export const applyClassToList = (options: {
  group: Element[];
  className: string;
  remove?: boolean;
  wait?: number;
}) => {
  const { group, className, wait, remove = false } = options;

  const waitWrapper = async () => {
    if (!wait) {
      return;
    }

    await delay(wait);
  };

  const applyClass = async (index = 0) => {
    if (index >= group.length) return;

    const child = group[index];

    if (remove) {
      child.classList.remove(className);
    } else {
      child.classList.add(className);
    }

    await waitWrapper();
    requestAnimationFrame(() => applyClass(index + 1));
  };

  requestAnimationFrame(() => applyClass());
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any) => any>(
  fn: T,
  wait: number,
) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => fn(...args), wait);
  };
};

export const getFadeInElements = () =>
  Array.from(document.querySelectorAll(".fade-in-element"));
