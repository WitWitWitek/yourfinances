import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type WrapperProps = {
  selector?: string;
  className?: string;
  children: ReactNode;
};

export function Wrapper({ className, children, selector }: WrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
      id={selector ?? ""}
    >
      {children}
    </div>
  );
}
