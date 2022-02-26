import React from 'react';
import { Button } from '../Button/Button';
import s from './Counter.module.css';

type CounterPropsType = {
    count: number;
    callBack: () => void
    calBackReset: () => void
    maxValue: number
    startValue: number
}
export const Counter = (props: CounterPropsType) => {



    return (
        <div className={s.counter} >
            <div className={props.count === props.maxValue ? s.maximum : s.tablo} > {props.count} </div>

            <Button name={"Inc"}
                callBack={props.callBack}
                disabled={props.count >= props.maxValue}
            />
            <Button name={"Reset"}
                callBack={props.calBackReset}
                disabled={props.count === props.startValue}
            />

        </div>
    )
}
