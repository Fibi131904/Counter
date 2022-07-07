import React  from 'react';
import s from './Input.module.css';

type InputType = {
    onChangeInputValue: (title: number) => void
    inputValue: number
    error?:boolean 
    
}
export const Input = (props: InputType) => {

    console.log(props.inputValue);
    const onChangeInputHandler = (event: any) => {
        props.onChangeInputValue(+event.currentTarget.value);
    }
     const classNameInputDisplayHandler = props.error? `${s.inputDisplay} ${s.error } `: s.inputDisplay
    return (
        <input

            className={classNameInputDisplayHandler}
            onChange={onChangeInputHandler}
            type='number'
            min="0"
            value={props.inputValue}
        />
    )

}
