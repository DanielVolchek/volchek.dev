const colors = {
  primary: "teal-300",
  secondary: "indigo-600",
} as const;

export const text = {
  primary: `text-${colors.primary}`,
  secondary: `text-${colors.secondary}`,
};

export const bg = {
  primary: `bg-${colors.primary}`,
  secondary: `bg-${colors.secondary}`,
};

export const border = {
  primary: `border-${colors.primary}`,
  secondary: `border-${colors.secondary}`,
};

export default colors;
