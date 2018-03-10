import React from 'react';
// import { StackNavigator, SwitchNavigator, addNavigationHelpers } from 'react-navigation';
// import { createStore, applyMiddleware, combineReducers} from 'redux';
// import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

 // import MainNavigator from './src/Navigation/MainNav';

 import {Tabs} from './src/Navigation/router';

export default class App extends React.Component {
  render() {
    return (
       <Tabs />
    );
  }
}
