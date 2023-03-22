import { ReactNode } from 'react';
import './buttons.scss';

interface ButtonIterface {
    onClick: () => void,
    children: string | ReactNode
};

export const Button = ({ children, ...props }: ButtonIterface) => (
    <button className="button" {...props}>{children}</button>
);