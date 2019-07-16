import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RecipeInfoScreen } from './RecipeInfoScreen.component';
//add actions from actions/resipes
// import {
// } from './store/actions';
const mapStateToProps = (state, props) => {
  console.log(props);

  return {

  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  //add method for add recipe to wishList
  const onAddResipeToWishList = (recipe: Object) => console.log('search', recipe);

  return {
    onAddResipeToWishList
  };
};

export const RecipeInfoScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeInfoScreen);