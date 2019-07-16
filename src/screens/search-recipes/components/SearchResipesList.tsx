import React from 'react';
import {
  ScrollView, View, Button
} from 'react-native';
import { RecipeCard } from '../../../components/recipe/RecipeCard';
import { Styles } from './styles';


export const SearchResipesList = ({ recipes, onOpenRecipeInfo, onGetMoreRecipes }): JSX.Element => (
  <ScrollView
    style={ Styles.searchResipesListContainer }
    showsVerticalScrollIndicator={false}
  >
    <View style={Styles.recipesListContainer}>
      {recipes && recipes.map((recipe: object, index: number) => {
        return (
          <RecipeCard
            key={index}
            recipe={recipe}
            onOpenRecipeInfo={onOpenRecipeInfo}
          />
        )}
      )}
    </View>
    <Button
      color="#40C268"
      title="Get More"
      onPress={() => onGetMoreRecipes()}
    />
  </ScrollView >
);