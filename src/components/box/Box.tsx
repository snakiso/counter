import React, {useState} from 'react';
import s from './Box.module.css'
import {CounterBox} from "../counterBox/CounterBox";
import {SettingBox} from "../settingBox/SettingBox";


export const Box = () => {

    const [mode, setMode] = useState(false)

    const changeMode = (newMode:boolean) => {
        setMode(newMode)
    }

    return (
        <div className={s.box}>
            <div className={s.boxInner}>
                {mode
                    ?
                    <SettingBox changeMode={changeMode}/>
                    :
                    <CounterBox changeMode={changeMode}/>
                }
            </div>
        </div>
    );
};

