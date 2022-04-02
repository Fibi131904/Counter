import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { Settings } from './components/Settings/Settings';






function App() {
    const startValue = 0;
    const maxValue = 5;
    const [count, setCount] = useState(startValue)
    let [startNumber, setStartNumber] = useState(startValue) //для кнопки стартовое значение
    let [finishNumber, setFinishNumber] = useState(maxValue) // для кнопки финишное значение
    let [error, setError] = useState<boolean>(false)


    useEffect(() => {
        startNumber < finishNumber ?
            setError(false) : setError(true)
    }, [startNumber, finishNumber])


    const plus = () => {  // прибавление
        const newValue = count + 1
        if (count < finishNumber)
            setCount(newValue)

    }
    const reset = () => {
        setCount(startValue)
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

        <div className='container'>

            <Settings
                startNumber={startNumber}
                setStartNumber={setStartNumber}
                finishNumber={finishNumber}
                setFinishNumber={setFinishNumber}
                callBackSet={set}
                error={error}

            />



            <Counter startNumber={startNumber}
                setStartNumber={setStartNumber}
                count={count}
                callBack={plus}
                calBackReset={reset}
                finishNumber={finishNumber}
                setFinishNumber={setFinishNumber}
                callBackSet={set}
                startValue={startValue}
                error={error}
            />
        </div>
    )
}

export default App;
