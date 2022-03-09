
import React  from 'react';
import { Button } from '../Button/Button';
import s from './Counter.module.css';

type CounterPropsType = {
    count: number
    callBack: () => void
    calBackReset: () => void
    callBackSet: () => void
    startNumber: number
    setStartNumber: (startNumber: number) => void
    finishNumber: number
    setFinishNumber: (finishNumber: number) => void
    startValue: number
    maxValue: number
}

export const Counter = (props: CounterPropsType) => {

const classNameTablo = `${s.tablo} ${props.count === props.finishNumber ? s.maximum : ''}`

    return (

        <div className={s.counter}>

            <div className={classNameTablo} > {props.count} </div>
            <Button name={'Inc'}
                callBack={props.callBack}
                disabled={props.count >= props.finishNumber}
            />
            <Button name={'Reset'}
                callBack={props.calBackReset}
                // disabled={props.startNumber === props.startValue}
                disabled={props.count === props.startValue}
            />


        </div >


    )
}
