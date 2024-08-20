import { FC, ReactNode } from 'react';

interface Props$3 {
    children: ReactNode | ReactNode[];
    text: string;
    link: string;
}
declare const Button1: FC<Props$3>;

interface Props$2 {
    children: ReactNode | ReactNode[];
    Fontsize: string;
}
declare const Headerr: FC<Props$2>;

interface Props$1 {
    children: ReactNode | ReactNode[];
    path: string;
}
declare const Button2: FC<Props$1>;

interface Props {
    heading: string;
    imgSrc: string;
    description: string;
    btnValue: string;
}
declare const Card: FC<Props>;

export { Button1, Button2, Card, Headerr as Hearder };
