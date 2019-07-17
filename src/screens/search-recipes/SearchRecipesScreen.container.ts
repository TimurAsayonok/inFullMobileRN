import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { SearchRecipesScreen } from './SearchRecipesScreen.component';
//add actions from actions/resipes
import {
  searchRecipesAction
} from '../../actions/recipe/actions';
import { AppState } from '../../reducers/index'

const mapStateToProps = ({
  entities: {
    recipes
  },
  status: {
    searchResipesStatus
  }
}: AppState) => {
  const recipesData: Array<Object> = recipes.recipesData;
  const requestPage: number = recipes.page;
  const searchRequestValue: string = recipes.searchRequestValue

  return {
    recipesData,
    requestPage,
    pending: searchResipesStatus.pending,
    searchRequestValue
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  //add method for search recipes
  const onSearchRecipes = (searchValue: string, nextPage?: number | undefined) => dispatch(searchRecipesAction(searchValue, nextPage));

  return {
    onSearchRecipes
  };
};

export const SearchRecipesScreenContainer = connect(mapStateToProps, mapDispatchToProps)(SearchRecipesScreen);
