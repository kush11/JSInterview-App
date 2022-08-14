import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ListItem.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {ListItemProps} from './ListItem.props';

const ListItem: React.FC<ListItemProps> = ({
  item,
  bookMarkClick,
  listClick,
  isBookMark = true,
}: ListItemProps) => {
  const {name, isBookmarked} = item.item;
  return (
    <View style={styles.listRoot}>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => listClick(item.item)}>
        <Text style={styles.listContainerText}>{name?.split('.md')[0]}</Text>
      </TouchableOpacity>
      {isBookMark && (
        <TouchableOpacity
          style={styles.bookmarkContainer}
          onPress={() => bookMarkClick(item.item)}>
          <Icon
            name={isBookmarked ? 'bookmark-sharp' : 'bookmark-outline'}
            size={22}
            // color={!isBookmarked ? '#c3f1f5' : undefined}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ListItem;
