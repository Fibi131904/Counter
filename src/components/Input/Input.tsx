import s from './Input.module.css';

type InputType = {
    onChangeInputValue: (title: number) => void
    inputValue: number
}

export const Input = (props: InputType) => {
    console.log(props.inputValue);
    const onChangeInputHandler = (event: any) => {
        props.onChangeInputValue(+event.currentTarget.value);
    }
    return (
        <input
            className={s.inputDisplay}
            onChange={onChangeInputHandler}
            type='number'
            min="0"
            value={props.inputValue}
        />
    )
}
