import React from 'react';
import {
  ScrollView,
  View,
  Button,
} from 'react-native';
import { RecipeCard } from '../../../components/recipe/RecipeCard';
import { Recipe } from '../../../types/entities';
import { Styles } from './styles';

// Props types
interface Props {
  recipes: Recipe[] // add recipe type
  onOpenRecipeInfo: (recipe: Recipe) => void
  onGetMoreRecipes: () => void
}

export const SearchResipesList = ({
  recipes,
  onOpenRecipeInfo,
  onGetMoreRecipes,
}: Props): JSX.Element => (
  <ScrollView
    style={Styles.searchResipesListContainer}
    showsVerticalScrollIndicator={false}
  >
    <View style={Styles.recipesListContainer}>
      {recipes && recipes.map((recipe: Recipe, index: number) => {
        return (
          <RecipeCard
            key={index}
            recipe={recipe}
            onOpenRecipeInfo={onOpenRecipeInfo}
          />
        );
      })}
    </View>
    <Button
      color="#40C268"
      title="Get More"
      onPress={() => onGetMoreRecipes()}
    />
  </ScrollView >
);
