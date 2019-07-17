import { Recipe } from '../types/entities';
/**
 * types for reducers states
 */
export interface RecipesState {
  recipesData: Recipe[],
  searchRequestValue: string,
  page: number
};

export interface RecipesStatusState {
  pending: boolean
};
