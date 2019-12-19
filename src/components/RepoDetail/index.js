import React, { Component } from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    FlatList,
    SafeAreaView,
} from 'react-native';
import { NameText } from '../RepoList/index.style';
import {
    CloseText,
    CloseWrap,
    ModalContainer,
} from '../../containers/Home/index.style';
import { Title, Commit } from './index.style';

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
                    <ModalContainer>
                        <View>
                            <CloseWrap>
                                <TouchableHighlight
                                    onPress={() => onShowModal()}>
                                    <CloseText>Close</CloseText>
                                </TouchableHighlight>
                            </CloseWrap>
                            <View>
                                <Text>{description}</Text>
                            </View>
                            <SafeAreaView>
                                <Text>
                                    <Title>Author:</Title> {author}
                                </Text>
                                <Text>
                                    <Title>License:</Title> {license}
                                </Text>
                                <Text>
                                    <Title>Language:</Title> {language}
                                </Text>
                                <Text>
                                    <Title>{status}</Title> repository
                                </Text>
                                <Text>
                                    <Title>Open Issues:</Title> {openIssues}
                                </Text>
                                <Text>
                                    <Title>Created at:</Title> {createdAt}
                                </Text>
                            </SafeAreaView>
                            <View>
                                <Text>Repository Commit List:</Text>
                            </View>
                            <SafeAreaView>
                                <FlatList
                                    data={commits}
                                    renderItem={({ item }) => (
                                        <Commit>
                                            <View>
                                                <NameText>
                                                    <Title>ID: </Title>
                                                    {item.id}
                                                </NameText>
                                            </View>
                                            <View>
                                                <NameText>
                                                    <Title>Author: </Title>
                                                    {item.author}
                                                </NameText>
                                            </View>
                                            <View>
                                                <NameText>
                                                    <Title>Message: </Title>
                                                    {item.message}
                                                </NameText>
                                            </View>
                                        </Commit>
                                    )}
                                    keyExtractor={item => item.id}
                                />
                            </SafeAreaView>
                        </View>
                    </ModalContainer>
                </Modal>
            </>
        );
    }
}

export default RepoDetail;
