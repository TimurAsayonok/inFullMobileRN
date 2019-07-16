import { Dispatch } from 'redux';
import { connect } from 'react-redux';
//add container
import { SearchRecipesScreen } from './SearchRecipesScreen.component';
//add actions from actions/resipes
// import {
// } from './store/actions';

const mapStateToProps = ({
  entities: {
    recipes
  }
}, props) => {
  const recipesData: Array<Object> = recipes.recipesData;
  const requestPage: number = recipes.page;

  return {
    recipesData,
    requestPage
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  //add method for search recipes
  const onSearchResipes = (searchValue: string) => console.log('search', searchValue);

  return {
    onSearchResipes
  };
};

export const SearchRecipesScreenContainer = connect(mapStateToProps, mapDispatchToProps)(SearchRecipesScreen);
