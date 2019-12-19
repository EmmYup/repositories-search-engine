import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from './selectors';
import SearchBar from '../../components/SearchBar';
import RepoList from '../../components/RepoList';

import { Wrap, LoadingContainer } from './index.style';

const App = props => {
    return (
        <View>
            {props.isLoading ? (
                <LoadingContainer>
                    <ActivityIndicator size="large" color="#373940" />
                </LoadingContainer>
            ) : (
                <>
                    <Wrap>
                        <SearchBar {...props} />
                    </Wrap>
                    <RepoList {...props} />
                </>
            )}
        </View>
    );
};

export default connect(
    selectors.propsSelector,
    dispatcher,
)(App);
