import {
  orderBy,
  uniqBy,
} from 'lodash';
import {
  SEARCH_RECIPES_START,
  SEARCH_RECIPES_FULFILLED,
} from '../../actions/recipe/constants';
import { RecipesState } from '../types';
import { PayloadAction } from '../../types/actions';


const initialState: RecipesState = {
  recipesData: [],
  searchRequestValue: '',
  page: 1
};

export default function (
  state = initialState,
  action: PayloadAction
) {
  const { type, payload  } = action;

  switch (type) {
    case SEARCH_RECIPES_START: {
      return {
        ...state,
        searchRequestValue: payload.searchText,
        page: payload.pageNumber
      }
    }
    case SEARCH_RECIPES_FULFILLED: {
      const oldRecipesData = state.recipesData;
      const searchResults = state.page > 1
        ? oldRecipesData.concat(payload.results)
        : payload.results;

      //order data by title (ascending)
      const orderedRecipesList = orderBy(searchResults, ['title'], ['asc']);
      
      //delete duplicates from array (sometimes response contains duplicates)
      const getUniqRecipesList = uniqBy(orderedRecipesList, 'title');
      
      return {
        ...state,
        recipesData: getUniqRecipesList
      }
    }
    default:
      return state;
  }
}