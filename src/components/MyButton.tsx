import React from "react";

export interface ButtonProps {
  label: string;
}

const MyButton = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default MyButton;
