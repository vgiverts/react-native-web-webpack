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

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  This is a single client
                </Text>
              </View>
        );
    }
}


