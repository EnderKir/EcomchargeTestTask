import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER, REQUEST_DATA, GET_CURRENT, REMOVE_CURRENT } from './types'

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchData(pageCount) {
    return {
        type: REQUEST_DATA,
        pageCount
    }
}

export function getCurrent(id) {
    return {
        type: GET_CURRENT,
        id
    }
}

export function removeCurrent() {
    return {
        type: REMOVE_CURRENT
    }
}