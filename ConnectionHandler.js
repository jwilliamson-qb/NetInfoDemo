import React from 'react';
import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export class ConnectionHandler extends React.Component {
    componentDidMount() {
        // for the very first time the app woken up
        NetInfo.fetch().then(this._handleConnectivityChange);

        // for when the app is running in the background becomes active
        this._addEventListeners();
    }

    componentWillUnmount() {
        this._removeEventListeners();
    }

    _addEventListeners = () => {
        NetInfo.addEventListener(
            this._handleConnectivityChange,
        );
    };

    _removeEventListeners = () => {
        NetInfo.removeEventListener(
            this._handleConnectivityChange,
        );
    };

    _handleConnectivityChange = (state) => {
        Alert.alert('Connection Status', JSON.stringify(state));
    };

    render() {
        return null;
    }
}
