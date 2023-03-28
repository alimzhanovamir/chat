import { ReactNode } from 'react';
import './buttons.scss';

interface ButtonIterface {
    onClick?: () => void,
    type?: 'submit' | 'button' | 'reset',
    children: string | ReactNode,
    disabled?: boolean,
};

export const Button = ({ children, ...props }: ButtonIterface) => (
    <button className="button" {...props}>{children}</button>
);