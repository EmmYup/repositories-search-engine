import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from './selectors';
import SearchBar from '../../components/SearchBar';
import RepoList from '../../components/RepoList';
import LogsView from '../../components/LogsView';
import { Wrap } from './index.style';

const App = props => {
    return (
        <View>
            <Wrap>
                <SearchBar {...props} />
            </Wrap>
            <RepoList {...props} />
        </View>
    );
};

export default connect(
    selectors.propsSelector,
    dispatcher,
)(App);
