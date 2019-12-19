import React, { useState } from 'react';
import {
    Button,
    FlatList,
    View,
    Modal,
    TouchableHighlight,
} from 'react-native';
import { LogText } from './index.style';
import {
    CloseText,
    CloseWrap,
    ModalContainer,
} from '../../containers/Home/index.style';

const LogsView = ({ logs }) => {
    const [isOpen, showModal] = useState(false);

    return (
        <View>
            <Button
                title="Show Logs"
                color="#373940"
                onPress={() => showModal(!isOpen)}
            />
            <Modal animationType="slide" transparent={false} visible={isOpen}>
                <ModalContainer>
                    <View>
                        <CloseWrap>
                            <TouchableHighlight
                                onPress={() => showModal(!isOpen)}>
                                <CloseText>Close</CloseText>
                            </TouchableHighlight>
                        </CloseWrap>
                        <View>
                            <FlatList
                                data={logs}
                                renderItem={({ item }) => (
                                    <View>
                                        <LogText>{item}</LogText>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </ModalContainer>
            </Modal>
        </View>
    );
};

export default LogsView;
