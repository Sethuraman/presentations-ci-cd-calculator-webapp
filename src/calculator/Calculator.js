import React  from 'react';
import { connect } from 'react-redux';
import './Calculator.css'
import performOperation from './actions';

const Display = (props) => (
    <div className="display">
        { props.calculator.value ? props.calculator.value : 
            `${props.calculator.operand1 || ''} ${props.calculator.operation || ''} ${props.calculator.operand2 || ''}` }
    </div>
);

const Button = (props) => (
    <button className="button" onClick={props.click}> 
        {props.text}
    </button>
);
const NumberPad = (props) => (
    <div className="numberPad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number =>
            <Button key={number} text={number} click={() => props.number(number)} />
        )}
    </div>    
);

const OpertionPad = (props) => (
    <div className="operationPad">
        {["+", "-", "*", "/", "="].map(operation =>
            <Button key={operation} text={operation} click={() => props.operation(operation, props.calculator)} />
        )}
    </div>    
);


const Calculator = (props) => (
    <div className="calculator">
        <Display {...props} />
        <NumberPad {...props} />
        <OpertionPad {...props} />
    </div>
);

export default connect(
    (state) => ({
      calculator: state.calculator
    }),
    (dispatch) => ({
      number: (number) => dispatch({
          type: 'number',
          payload: {
              number
          },
      }),
      operation: (operation, state) => dispatch(performOperation(operation, state)),
    })
  )(Calculator);