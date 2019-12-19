import actions from './actions';

const initialState = {
    repos: [],
    repo: {
        name: '',
        description: '',
        author: '',
        license: '',
        language: '',
        createdAt: '',
        status: '',
        openIssues: '',
        commits: [],
    },
    logs: [],
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.setList.type:
            return { ...state, repos: [...payload] };
        case actions.setRepo.type:
            return { ...state, repo: { ...payload } };
        case actions.setLog.type:
            const logs = state.logs;
            logs.push(...payload);
            return { ...state, logs };
        default:
            return state;
    }
}

export default reducer;
