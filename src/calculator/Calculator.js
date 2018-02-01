import React, { Component } from 'react';
import './Calculator.css'

const Display = (props) => (
    <div className="display">
        123 + 345
    </div>
);

const Button = (props) => (
    <button  className="button"> {props.text} </button>
);
const NumberPad = (props) => (
    <div className="numberPad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number =>
            <Button text={number} />
        )}
    </div>    
);

const OpertionPad = (props) => (
    <div className="operationPad">
        {["+", "-", "*", "/", "="].map(number =>
            <Button text={number} />
        )}
    </div>    
);


const Calculator = (props) => (
    <div class="calculator">
        <Display />
        <NumberPad />
        <OpertionPad />
    </div>
);

export default Calculator;