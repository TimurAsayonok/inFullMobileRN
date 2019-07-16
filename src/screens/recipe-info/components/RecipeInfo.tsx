import React, { Fragment } from "react";
import { Button, Image, Text, View } from 'react-native';
import { Recipe } from '../../../types/entities';
import { Styles } from './styles';

// Props types
interface Props {
  recipe: Recipe
  onOpenLinck: (url: string) => void
};

/**
 * RecipeInfo takes input params (recipe, onOpenLinck)
 * and return JSX.Element with recipe info
 */
export const RecipeInfo = ({ recipe, onOpenLinck }: Props): JSX.Element => (
  <Fragment>
    <View style={Styles.recipeInfoContainer}>
      <View style={Styles.imageContainer}>
        <Image
          style={Styles.recipeImage}
          resizeMode="cover"
          source={{ uri: recipe.thumbnail }}
        />
      </View>
      <View style={Styles.recipeTextContainer}>
        <Text style={Styles.recipeTitle}>
          {recipe.title}
        </Text>
        <Text style={Styles.recipeIngredientText}>
          {recipe.ingredients}
        </Text>
      </View>
    </View>
    <Button
      color="#40C268"
      title="Open Web Site"
      onPress={() => onOpenLinck(recipe.href)}
    />
  </Fragment>
);
