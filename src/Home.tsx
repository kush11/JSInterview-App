import {Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchQuestionList} from '../api/api';

export default function Home({navigation}: {navigation: any}) {
  useEffect(() => {
    getQuestionList();
  }, []);

  const getQuestionList = async () => {
    const data = await fetchQuestionList();
    console.log('data', data);
    setQuestionData(data);
  };

  const [getQuestionData, setQuestionData] = useState([]);

  const renderItem = (item: any) => {
    const {name, download_url} = item.item;
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
            title: name,
            data: download_url,
          })
        }>
        <Text>{name?.split('.md')[0]}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      style={{backgroundColor: 'white'}}
      data={getQuestionData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
