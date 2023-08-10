import React, {useState} from 'react';

import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

function App() {



    const [min, setMin] = useState(0)//for setting values
    const [max, setMax] = useState(0)

    const [counter, setCounter] = useState(0)//main counter
    const [maxValue, setMaxValue] = useState(0)


    console.log(min)
    console.log(max)
    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const resetButton = () => {
        setCounter(min)
    }

    const setValuesChangeHandler = () => {
        setCounter(min)
        setMaxValue(max)

    }


    const isMaxCount = counter >= max

    return (
        <div className = "App-header ">

            {/*1st block*/}
            <div className = {'container'}>
                <div className = {'valueBlock'}>
                    <Input labelName = {'max value:'} value = {max} setValue = {setMax} />
                    <Input labelName = {'start value:'} value = {min} setValue = {setMin} />
                </div>
                <div className = {'button-container'}>
                    <Button name = 'set' callback = {setValuesChangeHandler} />
                </div>
            </div>

            {/*2nd block*/}
            <div className = {'container'}>
                <div className = { isMaxCount? 'red' : 'counter'}>{counter}</div>
                <div className = {'button-container'}>
                    <Button name = {'INC'} callback = {incrementCounter} disabled = {isMaxCount} />
                    <Button callback = {resetButton} name = 'RESET' disabled = {counter === min} />
                    {/*<button onClick = {incrementCounter} disabled = {isMaxCount}>INC</button>*/}
                    {/*<button onClick = {resetButton} disabled = {counter === startValue}>RESET</button>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
