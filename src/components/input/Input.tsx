import React, {ChangeEvent, DetailedHTMLProps, DetailsHTMLAttributes, InputHTMLAttributes, useState} from 'react';
import s from './Input.module.css'

type DefaultInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type InputPropsType = Omit<DefaultInputProps, 'type' | 'onChange'> & {
    onChange: (value: number) => void,
    minNumber: number,
    maxNumber: number,
}

export const Input: React.FC<InputPropsType> = ({

                                                    onChange,
                                                    minNumber,
                                                    maxNumber,
                                                    ...restProps
                                                }) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value))
    }

    const inputClassName = minNumber >= maxNumber || minNumber < 0 ? s.errorInput : s.input

    return (
        <input className={inputClassName}
               onChange={onChangeHandler}
               type="number"
               {...restProps}
        />
    );
};

