import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_DATA, SAVE_DATA, GET_CURRENT, SET_CURRENT } from "../actions/types";
import { hideLoader, showAlert, showLoader } from '../actions/actions';
import axios from "axios";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_DATA, sagaGetAllCharacters);
    yield takeEvery(GET_CURRENT, sagaGetCurrent)

}

function* sagaGetAllCharacters() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts);
        yield put({ type: SAVE_DATA, payload });
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
        yield put({ type: SET_CURRENT, payload });
        yield put(hideLoader());
    } catch (e) {
        yield put(showAlert('Что-то пошло не так'))
        yield put(hideLoader())
    }
}

const fetchPosts = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
}

const fetchCurrentCharacter = async (id) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
}