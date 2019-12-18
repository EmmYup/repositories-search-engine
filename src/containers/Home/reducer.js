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
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.setList.type:
            return { ...state, repos: [...payload] };
        case actions.setRepo.type:
            return { ...state, repo: { ...payload } };
        default:
            return state;
    }
}

export default reducer;
