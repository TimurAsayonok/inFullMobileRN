import { combineReducers } from 'redux';

/** ENTITIES */
import recipes from './entities/recipes';

/** STATUS */
import searchResipesStatus from './status/searchRecipesStatus';

export default combineReducers({
  entities: combineReducers({
    recipes,
  }),
  status: combineReducers({
    searchResipesStatus,
  }),
});
