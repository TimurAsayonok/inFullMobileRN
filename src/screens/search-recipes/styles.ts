import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
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