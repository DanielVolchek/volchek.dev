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
  inputtedWaitTime = 75,
) => {
  const minBetweenInputAndMax = Math.min(
    inputtedWaitTime,
    maxTime / listLength,
  );
  return Math.floor(minBetweenInputAndMax);
};

export const applyClassToList = async (options: {
  group: Element[];
  className: string;
  remove?: boolean;
  wait?: number;
}): Promise<void> => {
  const { group, className, wait, remove = false } = options;

  const waitWrapper = async () => {
    if (!wait) {
      return;
    }

    await delay(wait);
  };

  return new Promise(async (resolve) => {
    let index = 0;

    const applyClass = async () => {
      if (index >= group.length) {
        resolve(); // Resolve the promise when all elements are processed
        return;
      }

      const child = group[index];

      if (remove) {
        child.classList.remove(className);
      } else {
        child.classList.add(className);
      }

      index++;
      await waitWrapper();

      // Schedule the next frame after the wait
      requestAnimationFrame(applyClass);
    };

    // Start the sequence
    requestAnimationFrame(applyClass);
  });
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
