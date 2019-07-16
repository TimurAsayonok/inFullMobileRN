import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: "row",
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 5
  },
  active: {
    borderWidth: 1,
    borderColor: '#40C268',
  },
  searchResipesListContainer: {
    marginTop: 30
  },
  recipesListContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap'
  },
  emptyMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyMessage: {
    fontSize: 20,
    fontWeight: '500'
  }
});