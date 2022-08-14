import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
  },
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
  flatListStyle: {
    backgroundColor: 'white',
  },
  emptySearch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListCOntainerStyle: {
    paddingBottom: 80,
  },
});
