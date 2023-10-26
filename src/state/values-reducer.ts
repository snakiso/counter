let initialState = {
    number: 0,
    minValue: 0,
    maxValue: 5
}


type NumberReducerType = NumberIncActionType | ResetNumActionType | minValueChangeType | maxValueChangeType

export const valuesReducer = (state = initialState, action: NumberReducerType) => {
    switch (action.type) {
        case "INC-NUM": {
            return {...state, number: state.number + 1}
        }
        case "RESET-NUM": {
            return {...state, number: state.minValue}
        }
        case "CHANGE-MIN-VALUE": {
            return {...state, minValue: action.payload.value}
        }
        case "CHANGE-MAX-VALUE": {
            return {...state, maxValue: action.payload.value}
        }
        default: {
            return state
        }
    }
}

type NumberIncActionType = ReturnType<typeof numberIncAc>

export const numberIncAc = () => {
    return {
        type: "INC-NUM" as const,
    }
}

type ResetNumActionType = ReturnType<typeof resetNumAC>

export const resetNumAC = (value: number) => {
    return {
        type: "RESET-NUM" as const,
        payload: {
            value
        }
    }
}

type maxValueChangeType = ReturnType<typeof maxValueChangeAC>

export const maxValueChangeAC = (value: number) => {
    return {
        type: "CHANGE-MAX-VALUE" as const,
        payload: {
            value
        }
    }
}

type minValueChangeType = ReturnType<typeof minValueChangeAC>

export const minValueChangeAC = (value: number) => {
    return {
        type: "CHANGE-MIN-VALUE" as const,
        payload: {
            value
        }
    }
}