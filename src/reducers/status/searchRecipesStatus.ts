import {
  SEARCH_RECIPES_START,
  SEARCH_RECIPES_FULFILLED,
  SEARCH_RECIPES_REJECTED
} from '../../actions/recipe/constants';
import { RecipesStatusState } from '../types';
import { DefaultAction } from '../../types/actions';

const initialState: RecipesStatusState = {
  pending: false
};

export default function (
  state = initialState,
  action: DefaultAction
) {
  const { type } = action;

  switch (type) {
    case SEARCH_RECIPES_START: {
      return {
        ...state,
        pending: true
      }
    }
    case SEARCH_RECIPES_FULFILLED:
    case SEARCH_RECIPES_REJECTED: {
      return {
        ...state,
        pending: false
      };
    }
    default:
      return state;
  }
}