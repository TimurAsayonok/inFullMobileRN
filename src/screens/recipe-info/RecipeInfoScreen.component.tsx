import React from "react";
import { Button } from "react-native";


export class RecipeInfoScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Recipe info'
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
    return (
        <Button
          title="Go to Search Screen"
          onPress={() => navigate('SearchRecipes', { name: 'Jane' })}
        />
    );
  }
}
