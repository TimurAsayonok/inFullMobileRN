import React from 'react';
import { Dispatch } from 'redux';
import { StatusBar, View } from 'react-native';
import {
  SafeAreaView,
  NavigationScreenProp,
} from 'react-navigation';
import { isEmpty } from 'lodash';

import { SearchRecipesInput } from './components/SearchRecipesInput';
import { SearchResipesList } from './components/SearchResipesList';
import { EmptyListMessage } from './components/EmptyListMessage';
import { FullScreenPreLoaderHOC } from '../../components/hocComponents';
import { Recipe } from '../../types/entities';
import { Styles } from './styles';

// get HOC for fullscreen preloader
const FullScreenPreLoaderView = FullScreenPreLoaderHOC(View);

// Props types
interface Props {
  navigation: NavigationScreenProp<any, any> // add navigation type
  onSearchRecipes: (searchValue: string, nextPage?: number | undefined) => Dispatch
  requestPage: number
  searchRequestValue: string
  recipesData: Recipe[] // change to recipe type
  pending: boolean
}

// State types
interface State {
}
export class SearchRecipesScreen extends React.PureComponent<Props, State> {
  static navigationOptions = {
    header: null,
  };

  onOpenRecipeInfoScreen = (recipe: Recipe) => {
    const { navigation } = this.props;
    const { navigate } = navigation;

    navigate('RecipeInfo', { recipe });
  }

  onGetMoreRecipes = () => {
    const {
      onSearchRecipes,
      requestPage,
      searchRequestValue,
    } = this.props;

    onSearchRecipes(searchRequestValue, requestPage + 1);
  }

  render() {
    const {
      onSearchRecipes,
      recipesData,
      pending,
    } = this.props;

    return (
      <FullScreenPreLoaderView
        isFetching={pending}
      >
        <SafeAreaView style={Styles.screenContainer}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#40C268"
          />
          <SearchRecipesInput
            onSearchRecipes={onSearchRecipes}
          />

          {/* add flatlist */}
          {!isEmpty(recipesData)
            ? (
              <SearchResipesList
                recipes={recipesData}
                onOpenRecipeInfo={this.onOpenRecipeInfoScreen}
                onGetMoreRecipes={this.onGetMoreRecipes}
              />
            )
            : <EmptyListMessage/>
          }
        </SafeAreaView>
      </FullScreenPreLoaderView>
    );
  }
}
