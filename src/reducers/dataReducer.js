import { SAVE_POSTS } from '../actions/types'

const initialState = {
    fetchedData: []
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POSTS:
            return { ...state, fetchedData: action.payload }
        default: return state
    }
}