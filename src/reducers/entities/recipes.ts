// import * as Actions from 'constants/actions';
// import _ from 'lodash';

const initialState = {
  recipesData: [],
  page: 1
};

export default function (state = initialState, action) {
  const { type, payload  } = action;

  switch (type) {
    default:
      return state;
  }
}