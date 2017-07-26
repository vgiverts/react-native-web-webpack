/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Platform,
    Button,
} from 'react-native';
import * as styles from './../../styles.js';
import ViewClientPage from './viewClientPage.js';

const platformText = {ios: 'iOS', android: 'Android', web: 'Web' };




export default class ListClientsPage extends Component {

    static navigationOptions = {
       title: 'ListClients',
     };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  Welcome to React Native! ({platformText[Platform.OS]})
                </Text>
                <Text style={styles.instructions}>
                  To get started, edit app.js
                </Text>
                <Text style={styles.instructions}>
                  Double tap R on your keyboard to reload,{'\n'}
                  Shake or press menu button for dev menu
                </Text>
                <Button onPress={() => {navigate('ViewClient')}} title="View a client"/>
              </View>
        );
    }
}


