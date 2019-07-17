import {
  SEARCH_RECIPES,
  SearchRecipesActionType
} from './constants';
import getFetch from '../../config/fetch';

/**
 * Method for searching recipes
 * @param searchText 
 * @param pageNumber
 */
export const searchRecipesAction = (searchText: string, pageNumber: number = 1): SearchRecipesActionType => {
  const requestValue = `i=${searchText}&p=${pageNumber}`;
  return {
    type: SEARCH_RECIPES,
    promise: () => getFetch('GET', requestValue),
    payload: {
      searchText,
      pageNumber
    }
  };
};
