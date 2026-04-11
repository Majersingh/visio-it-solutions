import { Children, isValidElement, cloneElement, type ReactNode, type CSSProperties, type HTMLAttributes } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li" | "span";
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const style = delay
    ? ({ "--reveal-delay": `${delay * 1000}ms` } as CSSProperties)
    : undefined;
  return (
    <Tag className={className} data-reveal="" style={style}>
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: StaggerProps) {
  let i = 0;
  const items = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const idx = i++;
    const totalDelay = delayChildren + idx * stagger;
    const existing = (child.props as { style?: CSSProperties }).style ?? {};
    const existingClass = (child.props as { className?: string }).className ?? "";
    return cloneElement(
      child as React.ReactElement<HTMLAttributes<HTMLElement>>,
      {
        "data-reveal": "",
        className: existingClass,
        style: {
          ...existing,
          ["--reveal-delay" as string]: `${totalDelay * 1000}ms`,
        },
      } as Partial<HTMLAttributes<HTMLElement>>,
    );
  });

  return <div className={className}>{items}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
