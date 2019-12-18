import React, { Component } from 'react';
import { TextInput, Button, AsyncStorage } from 'react-native';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChange = text => {
        this.setState({ text });
    };

    storeSearch = async log => {
        try {
            const logsArr = await AsyncStorage.getItem('logs');
            if (!logsArr) {
                await AsyncStorage.setItem('logs', JSON.stringify([log]));
            } else {
                const logs = JSON.parse(logsArr);
                logs.push(log);
                await AsyncStorage.setItem('logs', JSON.stringify(logs));
            }
        } catch (err) {
            console.log('err: ', err);
        }
    };

    handleSearch = () => {
        const { text } = this.state;
        this.storeSearch(text);
        const keywordsFormated = text
            .toLowerCase()
            .split(' ')
            .join('+');
        const { onGetList } = this.props;
        onGetList(keywordsFormated);
    };

    render() {
        const { text } = this.state;

        return (
            <>
                <TextInput
                    placeholder="Enter some repo keywords"
                    value={text}
                    onChangeText={this.handleChange}
                />
                <Button title="Press me" onPress={this.handleSearch} />
            </>
        );
    }
}

export default SearchBar;
