import { SAVE_DATA, SET_CURRENT, SET_MAX_PAGE_COUNT, REMOVE_CURRENT } from '../actions/types'

const initialState = {
    fetchedData: [],
    currentCharacter: {},
    maxPage: 2,
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return { ...state, fetchedData: mergeData(state, action) }
        case SET_CURRENT:
            return {...state, currentCharacter: action.payload}
        case SET_MAX_PAGE_COUNT:
            return {...state, maxPage: action.payload.data.info.pages}
        case REMOVE_CURRENT:
            return {...state, currentCharacter: {}}
        default: return state
    }
}

const mergeData = (state, action) => {
    return state.fetchedData.concat(action.payload.data.results);
}