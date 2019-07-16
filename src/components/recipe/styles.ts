import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  recipeCardContainer: {
    width: '50%',
    padding: 10,
  },
  recipeCard: {
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  recipeImage: {
    height: 200
  },
  recipeInfoContainer: {
    padding: 5
  },
  recipeTitle: {
    fontSize: 17,
    fontWeight: '500'
  },
  recipeIndredientsTitle: {
    fontSize: 15,
    color: '#40C268'
  }
});