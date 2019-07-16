import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Recipe } from '../../types/entities';
import { Styles } from './styles';

// Props types
interface Props {
  recipe: Recipe
  onOpenRecipeInfo: (recipe: Recipe) => void
}

export const RecipeCard = ({ recipe, onOpenRecipeInfo }: Props) => (
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
