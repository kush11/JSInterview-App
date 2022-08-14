import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {localStorageKeyType} from '../util/types';
import {useFocusEffect} from '@react-navigation/native';

import {
  getLocalStorageData,
  storeInterviewQuestionData,
} from '../util/localStorage';
import ListItem from '../Component/ListItem/ListItem';
import {styles} from './Bookmark.style';
import Search from '../Component/Search/Search';

export default function Bookmark({navigation}: {navigation: any}) {
  const [getQuestionData, setQuestionData] = useState([]);
  const [inputValue, onTextInput] = React.useState('');

  useFocusEffect(
    useCallback(() => {
      getLocalData();
    }, []),
  );

  const getLocalData = async () => {
    const localData = await getLocalStorageData(
      localStorageKeyType.questionBookMarkedData,
    );
    const filteredBookmarkedData = localData?.filter(
      (item: any) => item.isBookmarked,
    );
    setQuestionData(filteredBookmarkedData);
  };

  const markBookmark = (item: any) => {
    const newData: any = [...getQuestionData];
    const index = newData.findIndex((i: any) => i.name === item.name);
    newData[index].isBookmarked = !newData[index].isBookmarked;
    setQuestionData(newData);
    storeInterviewQuestionData(newData);
  };

  const renderItem = (item: any) => {
    return (
      <ListItem
        item={item}
        listClick={(itemClick: any) => {
          navigation.push('MarkdownView', {
            title: itemClick.name?.split('.md')[0] || '',
            data: itemClick.download_url,
          });
        }}
        bookMarkClick={(itemBookMarked: any) => markBookmark(itemBookMarked)}
        isBookMark={false}
      />
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      {getQuestionData.length > 0 && (
        <Search value={inputValue} onChangeNumber={onTextInput} />
      )}
      <FlatList
        style={styles.flatListStyle}
        data={
          getQuestionData.filter((item: any) => {
            return item.name.toLowerCase().match(inputValue.toLowerCase());
          }) || []
        }
        ListEmptyComponent={
          <View style={styles.emptySearch}>
            <Text>No Bookmarked Data Found</Text>
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListCOntainerStyle}
      />
    </SafeAreaView>
  );
}
