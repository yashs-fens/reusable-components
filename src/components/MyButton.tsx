import React from "react";

export type ButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const MyButton = (props: ButtonProps) => {
  return <button {...props}>{props.label}</button>;
};

export default MyButton;
