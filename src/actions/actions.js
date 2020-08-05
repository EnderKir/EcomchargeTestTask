import {HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, REQUEST_DATA, GET_CURRENT, REMOVE_CURRENT } from './types'

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const showAlert = (text) => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
    }
}

export const fetchData = (pageCount) => {
    return {
        type: REQUEST_DATA,
        pageCount
    }
}

export const getCurrent = (id) => {
    return {
        type: GET_CURRENT,
        id
    }
}

export const removeCurrent = () => {
    return {
        type: REMOVE_CURRENT
    }
}