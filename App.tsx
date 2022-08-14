import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './naivgation/TabNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
