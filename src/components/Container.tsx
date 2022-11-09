import { clsx } from "@mantine/core";
import { Attributes, HTMLAttributes, ReactHTMLElement, ReactNode } from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  margin?: string;
  width?: string;
}

export default function Container(props: IContainer) {
  const { children, className, width, margin, ...rest } = props;
  return (
    <section
      className={clsx(
        "max-w-screen-2xl px-[clamp(6rem,3vw,10rem)] mx-auto",
        width ?? "w-full",
        margin ?? "mx-auto",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
