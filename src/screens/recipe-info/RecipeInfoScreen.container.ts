import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RecipeInfoScreen } from './RecipeInfoScreen.component';


const mapDispatchToProps = (dispatch: Dispatch) => {
  //add method for add recipe to wishList -> todo
  const onAddResipeToWishList = (recipe: Object) => console.log('search', recipe);

  return {
    onAddResipeToWishList
  };
};

export const RecipeInfoScreenContainer = connect(() => ({}), mapDispatchToProps)(RecipeInfoScreen);