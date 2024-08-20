import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  Fontsize: string;
}

const Headerr: FC<Props> = ({ children, Fontsize }) => {
  const css = `
  h1 {
  position: relative;
  font-size: 10em;
  letter-spacing:10px;
  font-family: sans-serif;
  display:table;
  cursor:pointer;
  transition:.6s;
}
h1:before,
h1:after {
  content:attr(data-text);
  transition:.6s;
}
h1:before {
  left: 0;
  top: 0;
  position: absolute;
  z-index:-1;
  text-shadow:
   0px 0px,
   0px 0px,
   0px 0px,
   0px 0px,
   0px 0px,
   0px 0px,
   0px 0px,
   0px 0px,
   0px 0px,
   0px 0px;
  -webkit-mask:repeating-linear-gradient(45deg, transparent 0 3px, rgba(0,0,0,0.5) 0 6px);
          mask:repeating-linear-gradient(45deg, transparent 0 3px, rgba(0,0,0,0.5) 0 6px);
}
h1:hover {
  transform:translate(-10px,-10px);
}  
h1:hover:before {
  text-shadow:
   1px 1px,
   2px 2px,
   3px 3px,
   4px 4px,
   5px 5px,
   6px 6px,
   7px 7px,
   8px 8px,
   9px 9px,
   10px 10px;
}
  `;
  return (
    <div>
      <style>{css}</style>
      <h1 style={{ fontSize: Fontsize }} data-text={children}></h1>
    </div>
  );
};

export default Headerr;
