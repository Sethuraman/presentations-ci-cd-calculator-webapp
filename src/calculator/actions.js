import Request from '../common/Request'

const operationType = {
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
}

const performOperation = (operation, state) => {
    return async (dispatch) => {
        if (operation === "=") {
            const response = await Request.get(`/calc/${operationType[state.operation]}`, {
                number1: state.operand1,
                number2: state.operand2
            })
            dispatch({
                type: 'calculation',
                payload: {
                    value: response.result
                }
            })
        } else {
            return dispatch({
              type: 'operation',
              payload: {
                  operation
              },
            });
        }
    }
}

export default performOperation;