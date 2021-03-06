export const SEARCH_RECIPES = 'SEARCH: search recipes by value';
export const SEARCH_RECIPES_START = 'SEARCH: search recipes by value start';
export const SEARCH_RECIPES_FULFILLED = 'SEARCH: search recipes by value fulfilled';
export const SEARCH_RECIPES_REJECTED = 'SEARCH: search recipes by value rejected';

export interface SearchRecipesActionType {
  type: typeof SEARCH_RECIPES
  promise: () => Promise<Response>
  payload: {
    searchText: string,
    pageNumber: number
  }
}