import React, { Fragment } from "react";
import { Button, Image, Text, View } from 'react-native';
import { Styles } from './styles';

export const RecipeInfo = (props) => {
  const { recipe, onOpenLinck } = props;

  return (
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
}
