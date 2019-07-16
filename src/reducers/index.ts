import { combineReducers } from 'redux';

/** ENTITIES */
import recipes from './entities/recipes';

/** STATUS */

// export default combineReducers({
//   entities: combineReducers({
    
//   }),
// });

export default combineReducers({
  entities: combineReducers({
    recipes 
  }),
});
