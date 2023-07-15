import React, {useState} from 'react';

import './App.css';

function App() {
    let startValue = 0
    let maxValue = 5
    const [counter, setCounter] = useState(startValue)

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const resetButton = () => {
        setCounter(startValue)
    }

    const isMaxCount = counter >= maxValue

    return (
        <div className = "App-header ">
            <div className = {'container'}>
                <div className = {'counter'}>{counter}</div>
                <div className = {'button-container'}>
                    <button onClick = {incrementCounter} disabled = {isMaxCount}>INC</button>
                    <button onClick = {resetButton} disabled = {counter === startValue}>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default App;
