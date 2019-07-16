import React from "react";
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from "react-navigation";
import configureStore from './store/configureStore'

import { SearchRecipesScreenContainer } from './screens/search-recipes/SearchRecipesScreen.container'
import { RecipeInfoScreenContainer } from './screens/recipe-info/RecipeInfoScreen.container';


const AppNavigator = createStackNavigator({
  SearchRecipes: { screen: SearchRecipesScreenContainer },
  RecipeInfo: { screen: RecipeInfoScreenContainer },
});

const Navigation = createAppContainer(AppNavigator);

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)

export default App;