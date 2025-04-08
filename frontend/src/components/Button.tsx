import React from "react";

interface ButtonProps {
  noHover?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({ noHover, children, className, style }: ButtonProps) {
  return (
    <button style={style}
      className={`${!noHover && "hover:bg-gray-800"} 
      p-2 duration-300 flex justify-center 
      items-center h-10 rounded-full cursor-pointer
      ${className}`}>
      { children }
    </button>
  )
}