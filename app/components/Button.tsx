import React from "react";

interface ButtonProps {
  classes?: string;
  onClick?: () => void;
  text: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`${props.classes} text-white py-2 px-4 hover:underline`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
