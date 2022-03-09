import React  from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';




type SettingsPropsType= {
    setStartNumber:(startNumber:number)=> void
    finishNumber:number
    startNumber: number
    setFinishNumber: (finishNumber:number)=> void
    callBackSet: ()=> void
   
  

}
export const Settings= (props:SettingsPropsType)=> {
    return (

        <>
        <Input onChangeInputValue={props.setStartNumber} inputValue={props.startNumber}/>
          <Input onChangeInputValue={props.setFinishNumber} inputValue={props.finishNumber}/>
          <Button name={'Set'} callBack={props.callBackSet} disabled={false} />
        </>
    )
}