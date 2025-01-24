import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const waitInputMS = async (number = 125) => {
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
    waitMS = 125,
  } = options;

  const waitWrapper = async () => {
    if (!wait) {
      return;
    }

    console.log("waiting ", waitMS);

    await waitInputMS(waitMS);
  };

  for (const child of group) {
    if (remove) {
      child.classList.remove(className);
      await waitWrapper();
    } else {
      await waitWrapper();
      child.classList.add(className);
    }
  }
};
