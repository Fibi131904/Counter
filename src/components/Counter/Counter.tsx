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
    error: boolean
}  

export const Counter = (props: CounterPropsType) => {


    const classNameFinishStyle = props.count >= props.finishNumber ? `${s.tablo} ${s.errorMessage} ` : s.tablo

    return (

        <div className={s.counter}>

            <div className={classNameFinishStyle} > {props.error ? <span className={s.errorMessage}>Error</span> : props.count} </div>


            <Button name={'Inc'}
                callBack={props.callBack}
                disabled={props.count >= props.finishNumber}
            />
            <Button name={'Reset'}
                callBack={props.calBackReset}
                disabled={props.count === props.startValue}
            />


        </div >


    )
}
