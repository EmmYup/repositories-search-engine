import createActions from '../../services/createActions';

const prefix = '@repositories_search_engine/app';

const types = ['GET_LIST', 'SET_LIST', 'SET_REPO', 'SET_LOADING', 'SET_LOG'];

const { getList, setList, setRepo, setLoading, setLog } = createActions(
    prefix,
    types,
);

export default {
    getList,
    setList,
    setRepo,
    setLoading,
    setLog,
};
