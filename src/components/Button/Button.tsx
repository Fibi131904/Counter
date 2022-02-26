
import React, { useState } from 'react';
import s from './Button.module.css';


type ButtonType = {
  name: string
  callBack: () => void
}
export const Button = (props: ButtonType) => {

  const onClickHundler = () => {
    props.callBack()
  }

  return (
    <button onClick={onClickHundler}>{props.name}</button>

  )
}