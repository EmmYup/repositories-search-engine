import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../services/api';

function* getListSaga({ payload }) {
    try {
        const keywordsFormated = payload
            .toLowerCase()
            .split(' ')
            .join('+');
        yield put(actions.setLoading());
        yield put(actions.setLog(payload));
        const {
            data: { items },
        } = yield call(api.repository.list, keywordsFormated);
        yield put(actions.setList(items));
        yield put(actions.setLoading());
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

export default function* homeSagas() {
    yield takeLatest(actions.getList.type, getListSaga);
    yield takeLatest(actions.setRepo.type, setRepoSaga);
}
