import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Styles } from './styles';


export const RecipeCard = (props) => {
  const { recipe, onOpenRecipeInfo } = props;

  return (
    <TouchableOpacity
      style={Styles.recipeCardContainer}
      onPress={() => onOpenRecipeInfo(recipe)}
    >
      <View style={Styles.recipeCard}>
        <Image
          style={Styles.recipeImage}
          resizeMode="cover"
          source={{ uri: recipe.thumbnail }}
        />
        <View style={Styles.recipeInfoContainer}>
          <Text style={Styles.recipeTitle}>
            {recipe.title}
          </Text>
          <Text style={Styles.recipeIndredientsTitle}>
            {recipe.ingredients}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};