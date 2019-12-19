import actions from './actions';

const dispatcher = dispatch => ({
    onGetList: name => dispatch(actions.getList(name)),
    onSetRepo: params => dispatch(actions.setRepo(params)),
    onSetLog: log => dispatch(actions.setLog(log)),
});

export default dispatcher;
