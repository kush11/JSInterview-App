import {Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchQuestionList} from '../api/api';
import {styles} from './Home.styles';

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
        style={styles.listRoot}
        onPress={() =>
          navigation.push('MarkdownView', {
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
      style={styles.flatListStyle}
      data={getQuestionData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
