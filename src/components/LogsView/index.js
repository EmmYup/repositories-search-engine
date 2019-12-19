import React, { useState } from 'react';
import {
    Button,
    Text,
    FlatList,
    View,
    Modal,
    TouchableHighlight,
} from 'react-native';

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
                <View style={{ marginTop: 22 }}>
                    <View>
                        <TouchableHighlight onPress={() => showModal(!isOpen)}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                        <View>
                            <FlatList
                                data={logs}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text>{item}</Text>
                                    </View>
                                )}
                                // keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default LogsView;
