import { call, apply, takeEvery, put } from 'redux-saga/effects'
import { LOAD_DATA, LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS } from '../reducer/actions'

export function* loadData() {
    try {
        const request = yield call(
            fetch,
            `https://yts.mx/api/v2/list_movies.json?page=1&limit=20`
        )
        const data = yield apply(request, request.json)
        yield put({
            type: LOAD_DATA_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        yield put({
            type: LOAD_DATA_FAILURE,
            payload: error
        })
    }
}

export function* appSaga() {
    yield takeEvery(LOAD_DATA, loadData)
}