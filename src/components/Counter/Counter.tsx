import React  from 'react';
import { Button } from '../Button/Button';
import s from'./Counter.module.css';

type CounterPropsType= {
    count: number;
    callBack: ()=>void
    calBackReset: ()=> void
}
export const Counter=(props: CounterPropsType)=>{

return (
<div className={s.counter}>
<div>{props.count} </div>

<Button name={"Inc"}callBack={props.callBack }/>
<Button name={"Reset"}callBack= {props.calBackReset}/>
</div>
)
}
