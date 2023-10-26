import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent, MouseEventHandler} from 'react';

import s from './Button.module.css'

type ButtonDefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = Omit<ButtonDefaultProps, ''> & {
    callback: () => void,
    title: string,
}

export const Button: React.FC<ButtonPropsType> = ({title, callback, ...rest}) => {


    return (
        <button onClick={callback} className={s.button} {...rest}>{title}</button>
    );
};

