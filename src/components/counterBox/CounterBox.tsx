import React, {FC} from 'react';
import s from "../box/Box.module.css";
import {Count} from "../count/Count";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {Button} from "../button/Button";
import {numberIncAc, resetNumAC} from "../../state/values-reducer";



type CounterBoxPropsType = {
    changeMode: (mode: boolean) => void
}

export const CounterBox: FC<CounterBoxPropsType> = ({changeMode}) => {

    const number: number = useSelector<AppRootStateType, number>(state => state.values.number)
    const minValue: number = useSelector<AppRootStateType, number>(state => state.values.minValue)
    const maxValue: number = useSelector<AppRootStateType, number>(state => state.values.maxValue)
    const dispatch = useDispatch()
    const incNumber = () => {
        if (number < maxValue) {
            dispatch(numberIncAc())
        }
    }
    const resetNumber = () => {
        dispatch(resetNumAC(minValue))
    }

    return (
        <div>
            <div className={s.boxContent}>
                <Count number={number} maxNumber={maxValue}/>
            </div>
            <div className={s.boxButtons}>
                <Button callback={incNumber} title={'inc'} disabled={number === maxValue}/>
                <Button callback={resetNumber} title={'reset'} disabled={number === minValue}/>
                <Button callback={() => changeMode(true)} title={'set'} disabled={false}/>
            </div>
        </div>
    );
};

