import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './App/HomeScreen.js';
import UserProfile from './App/UserProfile.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  UserProfile: { screen: UserProfile },
});

export default App;
