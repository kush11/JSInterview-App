import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listRoot: {
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#f0f4f5',
    minHeight: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flex: 8,
  },
  listContainerText: {
    color: '#000000',
  },
  bookmarkContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
