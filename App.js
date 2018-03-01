import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './App/HomeScreen.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

export default App;
