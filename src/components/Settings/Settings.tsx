
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import s from './Settings.module.css';





type SettingsPropsType= {
    setStartNumber:(startNumber:number)=> void
    finishNumber:number
    startNumber: number
    setFinishNumber: (finishNumber:number)=> void
    callBackSet: ()=> void
    error:boolean
    
}


export const Settings = (props: SettingsPropsType) => {
    console.log(props.error);

    return (

        <div className={s.settings}>

            <Input onChangeInputValue={props.setStartNumber} inputValue={props.startNumber} error={props.error} />
            <Input onChangeInputValue={props.setFinishNumber} inputValue={props.finishNumber} />

            <Button name={'Set'} callBack={props.callBackSet} disabled={false} />
        </div>
    )
}