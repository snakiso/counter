import {FC} from 'react';
import s from './Count.module.css'

type CountPropsType = {
    number: number,
    maxNumber: number,
}

export const Count: FC<CountPropsType> = ({number,maxNumber}) => {
    return (
        <div className={s.count}>
            <span className={number === maxNumber ? s.maxValue : ''}>{number}</span>
        </div>
    );
};

