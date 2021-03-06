import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/Home';
import Bookmark from '../src/Bookmark/Bookmark';
import MarkdownView from '../src/MarkdownView/MarkdownView';

const Stack = createNativeStackNavigator();

const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'JS Interview Questions'}}
        />
        <Stack.Screen name="Details" component={Bookmark} />
        <Stack.Screen
          name="MarkdownView"
          component={MarkdownView}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
