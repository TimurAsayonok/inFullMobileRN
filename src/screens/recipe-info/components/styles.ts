import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  recipeInfoContainer: {
    flex: 1
  },
  imageContainer: {
    zIndex: 1,
    flex: 1
  },
  recipeImage: {
    width: '100%',
    height: 300
  },
  recipeTextContainer: {
    zIndex: 5,
    flex: 1,
    top: '-10%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  recipeTitle: {
    fontSize: 34,
    fontWeight: '500'
  },
  recipeIngredientText: {
    fontSize: 17,
    color: "#40C268"
  }
});