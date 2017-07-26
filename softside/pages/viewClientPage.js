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
const platformText = {ios: 'iOS', android: 'Android', web: 'Web' };

export default class ViewClientPage extends Component {

    static navigationOptions = {
           title: 'ViewClient',
         };

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  This is a single client
                </Text>
                <Text style={styles.welcome}>
                  Here are my argument: {params.myParam}
                </Text>
              </View>
        );
    }
}


