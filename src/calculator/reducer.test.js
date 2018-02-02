import reducer from './reducer';


describe('calculator reducer', () => {

    test('should store the first number', () => {
        let newState = reducer({}, {
            type: 'number',
            payload: {
                number: 1
            },
          });
        
        expect(newState).toEqual({
            operand1: 1
        })  

        let newState2 = reducer(newState, {
            type: 'number',
            payload: {
                number: 1
            },
          });
        
          expect(newState2).toEqual({
            operand1: 11
        })
    });

    test('should store the second number', () => {
        let newState = reducer({ operand1: 10 , operation: '+' }, {
            type: 'number',
            payload: {
                number: 2
            },
          });
        
        expect(newState).toEqual({
            operand1: 10,
            operation: '+',
            operand2: 2,
        })
        
        let newState2 = reducer(newState, {
            type: 'number',
            payload: {
                number: 2
            },
          });
        
        expect(newState2).toEqual({
            operand1: 10,
            operation: '+',
            operand2: 22,
        })
    });

    test('should store the operation', () => {
        let newState = reducer({ operand1: 10 }, {
            type: 'operation',
            payload: {
                operation: '+'
            },
          });
        
        expect(newState).toEqual({
            operand1: 10,
            operation: '+'
        })  
    });

    test('should not store the operation if operand 1 is not there', () => {
        let newState = reducer({ }, {
            type: 'operation',
            payload: {
                operation: '+'
            },
          });
        
        expect(newState).toEqual({ })  
    });

    test('should store value for calculation', () => {
        let newState = reducer({ }, {
            type: 'calculation',
            payload: {
                value: '123'
            },
          });
        
        expect(newState).toEqual({ value: '123' })  
    });

    
});
