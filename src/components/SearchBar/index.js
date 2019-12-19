import React, { Component } from 'react';
import { TextInput, Button, AsyncStorage } from 'react-native';
import LogsView from '../LogsView';

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

    handleSearch = () => {
        const { text } = this.state;
        const { onGetList } = this.props;
        onGetList(text);
    };

    render() {
        const {
            state: { text },
            props: { logs },
        } = this;

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
