import React from "react";

interface ButtonProps {
  noHover?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ noHover, children, className, style, onClick }: ButtonProps) {
  return (
    <button style={style}
      onClick={onClick}
      className={`${!noHover && "hover:bg-tertiary"} 
      p-2 duration-300 flex justify-center 
      items-center rounded-full cursor-pointer
      ${className}`}>
      { children }
    </button>
  )
}