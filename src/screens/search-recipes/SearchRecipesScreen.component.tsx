import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { isEmpty } from 'lodash';

import { SearchRecipesInput } from './components/SearchRecipesInput';
import { SearchResipesList } from './components/SearchResipesList';
import { EmptyListMessage } from './components/EmptyListMessage';
import FullScreenPreLoaderHOC from '../../components/hocComponents/fullScreenPreLoader/FullScreenPreLoaderHOC';
import { Styles } from './styles';

//get HOC for fullscreen preloader
const FullScreenPreLoaderView = FullScreenPreLoaderHOC(View);

export class SearchRecipesScreen extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  onOpenRecipeInfoScreen = (recipe: object) => {
    const { navigation } = this.props;
    const { navigate } = navigation;

    navigate('RecipeInfo', { recipe });
  }

  onGetMoreRecipes = () => {
    const {
      onSearchRecipes, requestPage, searchRequestValue
    } = this.props;

    onSearchRecipes(searchRequestValue, requestPage + 1);
  }

  render() {
    const {
      onSearchRecipes, recipesData, pending
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
