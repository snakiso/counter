import React, {FC} from 'react';
import s from "../box/Box.module.css";
import {Input} from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {Button} from "../button/Button";
import {maxValueChangeAC, minValueChangeAC, resetNumAC} from "../../state/values-reducer";

type SettingBoxPropsType = {
    changeMode: (mode: boolean) => void
}

export const SettingBox: FC<SettingBoxPropsType> = ({changeMode}) => {

    const minValue: number = useSelector<AppRootStateType, number>(state => state.values.minValue)
    const maxValue: number = useSelector<AppRootStateType, number>(state => state.values.maxValue)
    const dispatch = useDispatch()
    const changeMaxValue = (value: number) => {
        dispatch(maxValueChangeAC(value))
    }
    const changeMinValue = (value: number) => {
        dispatch(minValueChangeAC(value))
    }

    const saveAndChange = () => {
        changeMode(false)
        dispatch(resetNumAC(minValue))
    }


    return (
        <div>
            <div className={s.boxInputs}>
                <Input placeholder={`${maxValue}`}
                       value={maxValue}
                       onChange={changeMaxValue}
                       minNumber={minValue}
                       maxNumber={maxValue}
                />
                <Input placeholder={`${minValue}`}
                       value={minValue}
                       onChange={changeMinValue}
                       minNumber={minValue}
                       maxNumber={maxValue}
                />
            </div>
            <div className={s.boxButtonOne}>
                <Button callback={saveAndChange}
                        title='set'
                        disabled={minValue >= maxValue || minValue < 0}/>
            </div>
        </div>

    );
};

