import actions from '../actions/actionTypes';

export default (state=null, action) => {
  const { type, payload } = action;
  switch(type) {
    case actions.SET_FILTER:
      return payload;
    default:
      return state;
  }
};