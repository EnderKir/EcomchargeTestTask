import { SAVE_DATA, SET_CURRENT } from '../actions/types'

const initialState = {
    fetchedData: [],
    currentCharacter: {}
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return { ...state, fetchedData: action.payload }
        case SET_CURRENT:
            return {...state, currentCharacter: action.payload}
        default: return state
    }
}
