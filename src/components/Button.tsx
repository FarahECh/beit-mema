import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "text-white border-white border py-3 px-6 rounded-lg font-metropolis-regular hover:bg-white hover:text-black transition-all duration-300",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
