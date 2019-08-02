// import SHOP_DATA from './shop.data';

import shopActionsTypes from './shop.types'

const INITIAL_STATE = {
  collections: null
  // collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.UPDATE_COLLECTIONS:
        return {
          ...state,
          collections: action.payload
        }
    default:
      return state;
  }
};

export default shopReducer;