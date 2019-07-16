import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F2F2F2',
  },
  searchInputContainer: {
    flexDirection: "row",
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1
  }
});