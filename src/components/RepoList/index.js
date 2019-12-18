import React, { Component } from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { NameText } from './index.style';
import RepoDetail from '../RepoDetail';

class RepoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    formatParams = repository => {
        const {
            name,
            description = 'N/A',
            owner: { login },
            license,
            language,
            created_at,
            private: status,
            open_issues = 'N/A',
        } = repository;
        return {
            name,
            description,
            author: login,
            license: !license ? 'N/A' : license,
            language,
            createdAt: created_at,
            status: status === true ? 'Private' : 'Public',
            openIssues: open_issues,
        };
    };

    setRepository = repository => {
        const repo = this.formatParams(repository);
        const { onSetRepo } = this.props;
        onSetRepo(repo);
    };

    onShowModal = repository => {
        repository && this.setRepository(repository);
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    };

    render() {
        const { repos, repo } = this.props;
        const { isOpen } = this.state;
        return (
            <>
                <RepoDetail
                    onShowModal={this.onShowModal}
                    isOpen={isOpen}
                    repo={repo}
                />
                <FlatList
                    data={repos}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            onPress={() => this.onShowModal(item)}>
                            <NameText>{item.name}</NameText>
                        </TouchableHighlight>
                    )}
                    keyExtractor={item => item.id}
                />
            </>
        );
    }
}

export default RepoList;
