import React, { Component } from 'react';
import { TextInput, Button, AsyncStorage } from 'react-native';
import LogsView from '../LogsView';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            logs: [],
        };
    }

    handleChange = text => {
        this.setState({ text });
    };

    saveLog = log => {
        const { logs } = this.state;
        const updatedLogs = logs;
        updatedLogs.push(log);
        this.setState({ logs: updatedLogs });
    };

    handleSearch = () => {
        const { text } = this.state;
        const { onGetList } = this.props;
        this.saveLog(text);
        const keywordsFormated = text
            .toLowerCase()
            .split(' ')
            .join('+');
        onGetList(keywordsFormated);
    };

    render() {
        const { text, logs } = this.state;

        return (
            <>
                <TextInput
                    placeholder="Enter some repo keywords"
                    value={text}
                    onChangeText={this.handleChange}
                />
                <Button title="Search" onPress={this.handleSearch} />
                <LogsView logs={logs} />
            </>
        );
    }
}

export default SearchBar;
