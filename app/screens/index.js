import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'app/helpers/NavigationHelper/index';

export default class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }
}
