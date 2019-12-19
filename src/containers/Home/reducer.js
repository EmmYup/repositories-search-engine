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
    isLoading: false,
    logs: [],
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.setList.type:
            return { ...state, repos: [...payload] };
        case actions.setRepo.type:
            return { ...state, repo: { ...payload } };
        case actions.setLoading.type:
            return { ...state, isLoading: !state.isLoading };
        case actions.setLog.type:
            console.log('reducer payload', payload);
            return { ...state, logs: state.logs.concat([payload]) };
        default:
            return state;
    }
}

export default reducer;
