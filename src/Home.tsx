import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchQuestionList} from '../api/api';
import {styles} from './Home.styles';
import Search from './Component/Search';

export default function Home({navigation}: {navigation: any}) {
  useEffect(() => {
    getQuestionList();
  }, []);

  const getQuestionList = async () => {
    const data = await fetchQuestionList();
    setQuestionData(data);
  };
  const [getQuestionData, setQuestionData] = useState([]);
  const [inputValue, onTextInput] = React.useState('');

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
    <React.Fragment>
      <Search value={inputValue} onChangeNumber={onTextInput} />
      <FlatList
        style={styles.flatListStyle}
        data={getQuestionData.filter((item: any) => {
          return item.name.toLowerCase().match(inputValue);
        })}
        ListEmptyComponent={
          <View style={styles.emptySearch}>
            <Text>No Result Found</Text>
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </React.Fragment>
  );
}
