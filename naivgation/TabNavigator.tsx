import React from 'react';
import type {Route} from '@react-navigation/routers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookmarkScreen from '../src/Bookmark/Bookmark';
import StackNavigation from './navigation';
import MarkdownView from '../src/MarkdownView/MarkdownView';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BookmarkStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Booked Marked Questions" component={BookmarkScreen} />
      <Stack.Screen
        name="MarkdownView"
        component={MarkdownView}
        options={({route}) => ({title: route?.params?.name})}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        // tabBarStyle: {backgroundColor: 'gray'},
        // tabBarInactiveTintColor: '#8e8e93',
        // tabBarActiveTintColor: '#fff',
        // tabBarActiveBackgroundColor: '#AD4',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={StackNavigation}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="logo-javascript" size={size || 30} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkStackScreen}
        options={{
          // tabBarBadge: 8,
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmark" size={size || 30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route: Partial<Route<string>>) => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard';
  // console.log('routeName', routeName);

  if (routeName === 'MarkdownView') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
