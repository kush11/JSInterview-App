import {TextInput} from 'react-native';
import React from 'react';
import {styles} from './Search.styles';
import {SearchProps} from './Search.props';

const Search: React.FC<SearchProps> = ({
  value,
  onChangeNumber,
}: SearchProps) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={value}
      placeholder="Search"
      keyboardType="default"
    />
  );
};

export default Search;
