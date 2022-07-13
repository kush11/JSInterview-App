import {Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import resData from '../resource/resource';

export default function Home({navigation}: {navigation: any}) {
  const renderItem = (item: any) => {
    const {title, content} = item.item;
    return (
      <TouchableOpacity
        style={{
          marginVertical: 5,
          marginHorizontal: 5,
          padding: 10,
          borderRadius: 8,
          borderWidth: 2,
          borderColor: '#f0f4f5',
        }}
        onPress={() =>
          navigation.push('MarkdownView', {
            itemId: 86,
            title: title,
            data: content,
          })
        }>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      style={{backgroundColor: 'white'}}
      data={resData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
