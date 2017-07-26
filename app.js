/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import ListClientsPage from './softside/pages/listClientsPage.js';
import ViewClientPage from './softside/pages/viewClientPage.js';


const ExampleApp = StackNavigator({
  Home: { screen: ListClientsPage, path: 'home'},
  ViewClient: { screen: ViewClientPage, path: 'viewClient' },
});


module.exports = ExampleApp;