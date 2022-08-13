import React from 'react';
import {Text} from 'react-native';
import type {Route} from '@react-navigation/routers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import BookmarkScreen from '../src/Bookmark/Bookmark';
import StackNavigation from './navigation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#AD4',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={StackNavigation}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => <Text>kus</Text>,
        })}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => <Text>kusa</Text>,
        }}
      />
      {/* <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => <Text>kusaa</Text>,
        }}
      /> */}
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route: Partial<Route<string>>) => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard';
//   console.log('routeName', routeName);

  if (routeName === 'MarkdownView') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
