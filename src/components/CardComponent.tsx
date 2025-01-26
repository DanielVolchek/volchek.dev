import { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const CardComponent: FC<PropsType> = (props) => {
  const { children } = props;

  return (
    <div className="inline-block rounded-sm border border-gray-400 bg-gray-400/50 p-4">
      {children}
    </div>
  );
};
