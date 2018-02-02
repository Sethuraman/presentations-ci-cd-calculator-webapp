export default (state = {}, action) => {
    switch (action.type) {
        case 'number': {
            if (state.operation) {
                let number = parseInt(`${state.operand2 || ''}${action.payload.number}`, 10)
                return {...state, operand2: number }
            } else {
                let number = parseInt(`${state.operand1 || ''}${action.payload.number}`, 10)
                return { operand1: number }
            }
        }

        case 'operation': {
            if (state.operand1) {
                return {...state, operation: action.payload.operation }
            }
            return state
        }

        case 'calculation': {
            return { value: action.payload.value }
        }
        default: {
            return state;
        }
    }
}