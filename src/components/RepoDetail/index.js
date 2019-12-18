import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, FlatList } from 'react-native';
import { NameText } from '../RepoList/index.style';

class RepoDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {
            isOpen,
            onShowModal,
            repo: {
                description,
                author,
                license,
                language,
                createdAt,
                status,
                openIssues,
                commits,
            },
        } = this.props;

        return (
            <>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={isOpen}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <TouchableHighlight onPress={() => onShowModal()}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                            <View>
                                <Text>{description}</Text>
                            </View>
                            <View>
                                <Text>Author: {author}</Text>
                                <Text>License: {license}</Text>
                                <Text>Language: {language}</Text>
                                <Text>{status} repository</Text>
                                <Text>Open Issues: {openIssues}</Text>
                                <Text>Created at: {createdAt}</Text>
                            </View>
                            <View>
                                <Text>Repository Commit List:</Text>
                            </View>
                            <View>
                                <FlatList
                                    data={commits}
                                    renderItem={({ item }) => (
                                        <View>
                                            <NameText>ID: {item.id}</NameText>
                                            <NameText>
                                                Author: {item.author}
                                            </NameText>
                                            <NameText>
                                                Message: {item.message}
                                            </NameText>
                                        </View>
                                    )}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </>
        );
    }
}

export default RepoDetail;
