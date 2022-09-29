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
  MainContainer: {flex: 1},
  CartExampleTxt: {
    fontSize: 16,
    color: '#006E52',
    fontWeight: 'bold',
    margin: 15,
  },
  RateMeBtn: {
    backgroundColor: '#6E0052',
    alignSelf: 'center',
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  RateMeTxt: {color: '#fff', fontWeight: 'bold', fontSize: 15},
  containerBtn: {justifyContent: 'center', flex: 1},
});
