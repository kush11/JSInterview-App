import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchQuestionList} from '../api/api';
import {styles} from './Home.styles';
import Search from './Component/Search/Search';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  getLocalStorageData,
  storeInterviewQuestionData,
} from './util/localStorage';
import {localStorageKeyType} from './util/types';
import ListItem from './Component/ListItem/ListItem';
import InAppReview from 'react-native-in-app-review';
import useAppReview from './util/inAppReview';

export default function Home({navigation}: {navigation: any}) {
  const [getQuestionData, setQuestionData] = useState([]);
  const [inputValue, onTextInput] = React.useState('');

  InAppReview.isAvailable();

  console.log('InAppReview.isAvailable()', InAppReview.isAvailable());
  const {onReview} = useAppReview();
  useEffect(() => {
    getQuestionList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuestionList = async () => {
    try {
      const data = await fetchQuestionList();
      const localStorageData = await getLocalData();
      if (data?.length === localStorageData?.length) {
        setQuestionData(localStorageData);
      } else {
        const newData = data?.map((item: any) => {
          return {...item, isBookmarked: false};
        });
        setQuestionData(newData);
        storeInterviewQuestionData(newData);
      }
    } catch (error) {
      const localStorageData = await getLocalData();
      storeInterviewQuestionData(localStorageData || []);
    }
  };

  const getLocalData = async () => {
    const data = await getLocalStorageData(
      localStorageKeyType.questionBookMarkedData,
    );
    return data;
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
          onReview();
          navigation.push('MarkdownView', {
            title: itemClick.name?.split('.md')[0] || '',
            data: itemClick.download_url,
          });
        }}
        bookMarkClick={(itemBookMarked: any) => markBookmark(itemBookMarked)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Search value={inputValue} onChangeNumber={onTextInput} />
      <FlatList
        style={styles.flatListStyle}
        data={
          getQuestionData.filter((item: any) => {
            return item.name.toLowerCase().match(inputValue.toLowerCase());
          }) || []
        }
        ListEmptyComponent={
          <View style={styles.emptySearch}>
            <Text>No Result Found</Text>
          </View>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListCOntainerStyle}
      />
    </SafeAreaView>
  );
}
