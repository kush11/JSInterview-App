import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import RenderMarlDown from 'react-native-markdown-display';
import resData from './resource/resource';
const App = ({props}) => {
  console.log('sad', props);
  return (
    <SafeAreaView style={{display: 'flex', flex: 1, backgroundColor: 'red'}}>
      <View style={{display: 'flex', flex: 1, backgroundColor: 'yellow'}}>
        <Text>kush</Text>
        <TouchableOpacity>
          <Text>Click</Text>
        </TouchableOpacity>
        {resData.map(data => (
          <RenderMarlDown>{data.content}</RenderMarlDown>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
