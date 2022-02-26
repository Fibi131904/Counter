
import React, { useState } from 'react';
import s from './Button.module.css';


type ButtonType = {
  name: string;
  callBack: () => void;
  disabled: boolean;

}
export const Button = (props: ButtonType) => {

  const onClickHundler = () => {
    props.callBack()
  }

  return (
    <button className={s.btn} onClick={onClickHundler} disabled={props.disabled}>{props.name}</button>

  )
}