import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen.component';
import SettingsScreen from './components/SettingsScreen.component';
import Todos from './components/Todos.component';
import Posts from './components/posts/Posts.component';

export default TabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Todos: { screen: Todos },
    Posts: { screen: Posts }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
