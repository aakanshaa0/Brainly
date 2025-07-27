import type { ReactElement } from "react";

type Variants = "primary" | "secondary";
interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick:()=>void;
}

const variantStyles = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-300 text-purple-600" 
}

const sizeStyles = {
  "sm": "p-2 px-2",
  "md": "p-4 px-4",
  "lg": "p-6 px-6"
}

const defaultStyles = "rounded-md flex"

export const Button = (props: ButtonProps) => {
  return (
    <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} items-center`}>
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div>: null} {props.text} 
      {props.endIcon ? <span className="ml-2">{props.endIcon}</span> : null}
    </button>
  )
}
