import { combineReducers } from 'redux';

/** ENTITIES */
import recipes from './entities/recipes';

/** STATUS */
import searchResipesStatus from './status/searchRecipesStatus';

const rootReducer = combineReducers({
  entities: combineReducers({
    recipes,
  }),
  status: combineReducers({
    searchResipesStatus,
  }),
});
export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
