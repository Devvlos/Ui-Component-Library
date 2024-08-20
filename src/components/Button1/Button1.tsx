import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  text: string;
  link: string;
}
const Button: FC<Props> = ({ children, text, link }) => {
  return (
    <>
      <button className="btnn">{children}</button>
    </>
  );
};

export default Button;
