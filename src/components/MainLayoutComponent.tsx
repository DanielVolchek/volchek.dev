import { ComponentWrapper } from "@/lib/types";
import { cn } from "@/lib/utils";

export const MainLayoutComponent: ComponentWrapper<"main"> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <main
      className={cn(
        "flex flex-col gap-8 sm:max-w-[90%] md:max-w-[75%]",
        className,
      )}
      {...rest}
    >
      {children}
    </main>
  );
};
