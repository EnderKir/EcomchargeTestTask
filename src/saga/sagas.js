import {call, put, takeEvery} from "redux-saga/effects";
import {GET_CURRENT, REQUEST_DATA, SAVE_DATA, SET_CURRENT, SET_MAX_PAGE_COUNT} from "../actions/types";
import {hideLoader, showAlert, showLoader} from '../actions/actions';
import axios from "axios";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_DATA, sagaGetAllCharacters);
    yield takeEvery(GET_CURRENT, sagaGetCurrent)

}

function* sagaGetAllCharacters(action) {
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts, action.pageCount);
        yield put({type: SAVE_DATA, payload});
        yield put({type: SET_MAX_PAGE_COUNT, payload});
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert('Что-то пошло не так'))
        yield put(hideLoader())
    }
}

function* sagaGetCurrent(action) {
    try {
        yield put(showLoader());
        const payload = yield call(fetchCurrentCharacter, action.id);
        yield put({type: SET_CURRENT, payload});
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert('Что-то пошло не так'))
        yield put(hideLoader())
    }
}

const fetchPosts = async (pageCount) => {
    return await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page: pageCount
        }
    })
}

const fetchCurrentCharacter = async (id) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
}