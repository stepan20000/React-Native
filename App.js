import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen.component';
import SettingsScreen from './components/SettingsScreen.component';
import Todos from './components/Todos.component';
import Posts from './components/posts/Posts.component';

export default TabNavigator({
    Posts: { screen: Posts },
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Todos: { screen: Todos },
  },
  {
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: 'green',
        height: 43,
      },
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold'
      },
      activeTintColor: 'white',
      pressColor: 'white',
      style: {
        backgroundColor: '#3CB371',
        height: 43
      }
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
