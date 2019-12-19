import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../services/api';

function* getListSaga({ payload }) {
    try {
        const {
            data: { items },
        } = yield call(api.repository.list, payload);
        yield put(actions.setList(items));
    } catch (err) {
        console.log('err: ', err);
    }
}
function* setRepoSaga({ payload }) {
    try {
        const { name, author } = payload;
        const { data } = yield call(api.repository.commits, {
            owner: author,
            repo: name,
        });
        const commits = data.map(({ commit }) => {
            const {
                author: { name },
                tree: { sha },
                message,
            } = commit;
            return { id: sha, author: name, message };
        });
        const repo = Object.assign(payload, { commits: [...commits] });
        yield put(actions.setRepo(repo));
    } catch (err) {
        console.log('err: ', err);
    }
}

function* setLogSaga({ payload }) {
    try {
        yield put(actions.setLog(payload));
    } catch (err) {
        console.log('err: ', err);
    }
}

export default function* homeSagas() {
    yield takeLatest(actions.getList.type, getListSaga);
    yield takeLatest(actions.setRepo.type, setRepoSaga);
    yield takeLatest(actions.setLog.type, setLogSaga);
}
