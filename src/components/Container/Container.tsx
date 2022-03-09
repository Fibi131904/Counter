import React, { useEffect, useState } from 'react';
import { Counter } from '../Counter/Counter';
import { Settings } from '../Settings/Settings';


export const Container = () => {
    const startValue = 0;
    const maxValue = 5;

    const [count, setCount] = useState(startValue)
    let [startNumber, setStartNumber] = useState(startValue) //для кнопки стартовое значение
    let [finishNumber, setFinishNumber] = useState(maxValue) // для кнопки финишное значение


    const plus = () => {  // прибавление
        const newValue = count + 1
        if (count < finishNumber)
            setCount(newValue)
    }
    const reset = () => {
        setStartNumber(startValue)
    }
    const set = () => {
        setCount(startNumber)
        localStorage.setItem('counterValue', JSON.stringify(startNumber))
        localStorage.setItem('startValue', JSON.stringify(startNumber))
        localStorage.setItem('finishValue', JSON.stringify(finishNumber))

    }



    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }

    }, [])

    useEffect(() => {
        const rememberStartValue = localStorage.getItem('startValue')


        if (rememberStartValue) {
            let newS = JSON.parse(rememberStartValue)
            setStartNumber(newS)
        }


    }, [])

    useEffect(() => {
        const rememberFinishValue = localStorage.getItem('finishValue')


        if (rememberFinishValue) {
            let newF = JSON.parse(rememberFinishValue)
            setFinishNumber(newF)
        }

    }, [])
    return (

        <>
            <Counter
                startNumber={startNumber}
                setStartNumber={setStartNumber}
                count={count}
                callBack={plus}
                calBackReset={reset}
                finishNumber={finishNumber}
                setFinishNumber={setFinishNumber}
                callBackSet={set}
                startValue={startValue}
                maxValue={maxValue}
            />
            <Settings
                startNumber={startNumber}
                setStartNumber={setStartNumber}
                finishNumber={finishNumber}
                setFinishNumber={setFinishNumber}
                callBackSet={set}
            />

        </>
    )
}