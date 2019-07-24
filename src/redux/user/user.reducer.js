import { UserActionTypes } from './user.types'


const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;


//   function todoApp(state = initialState, action) {
//     switch (action.type) {
//       case SET_VISIBILITY_FILTER:
//         return Object.assign({}, state, {
//           visibilityFilter: action.filter
//         })
//       default:
//         return state
//     }
//   }
    
    