import {Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import RenderMarlDown from 'react-native-markdown-display';

export default function MarkdownView({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const {itemId, title, data} = route.params;
  console.log('itemId', itemId);
  useEffect(() => {
    navigation.setOptions({title});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView>
      <Text>{title}</Text>
      <RenderMarlDown>{data}</RenderMarlDown>
    </ScrollView>
  );
}
