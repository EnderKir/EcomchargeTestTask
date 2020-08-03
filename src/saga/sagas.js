import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_DATA, SAVE_POSTS } from "../actions/types";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_DATA, sagaWorker);
}

function* sagaWorker() {
    try {
        const payload = yield call(fetchPosts);
        yield put({ type: SAVE_POSTS, payload })
    } catch (e) {

    }
}

const fetchPosts = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    return await response.json()
}