import { SEARCH_RECIPES } from './constants';
import getFetch from '../../config/fetch';

export const searchRecipesAction = (searchText: string, pageNumber: number = 1) => {
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
