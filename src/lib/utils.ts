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

export const applyClassToList = async (options: {
  group: Element[];
  className: string;
  remove?: boolean;
  wait?: boolean;
  waitMS?: number;
}) => {
  const {
    group,
    className,
    remove = false,
    wait = false,
    waitMS = 25,
  } = options;

  const waitWrapper = async () => {
    if (!wait) {
      return;
    }

    console.log("waiting ", waitMS);

    await delay(waitMS);
  };

  for (const child of group) {
    if (remove) {
      await waitWrapper();
      child.classList.remove(className);
    } else {
      await waitWrapper();
      child.classList.add(className);
    }
  }
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
