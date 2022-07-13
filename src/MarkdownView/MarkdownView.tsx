import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import RenderMarlDown from 'react-native-markdown-display';
import {fetchQuestionResource} from '../../api/api';

export default function MarkdownView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const {itemId, title} = route.params;

  const [getQuestionData, setQuestionData] = useState('');

  useEffect(() => {
    getQuestionList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuestionList = async () => {
    const data = await fetchQuestionResource(title);
    console.log('data', data);
    setQuestionData(data);
  };
  console.log('itemId', itemId);
  useEffect(() => {
    navigation.setOptions({title});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{paddingHorizontal: 6}}>
      {/* <Text>{title}</Text> */}
      <RenderMarlDown>{getQuestionData}</RenderMarlDown>
    </ScrollView>
  );
}
