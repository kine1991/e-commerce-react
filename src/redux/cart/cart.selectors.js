import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

// ======*****=======


// // My Solution
// export const selectCartItemsCount = (state) => state.cart.cartItems.reduce((accomulatedQuantity, cartItem) => {
//     return accomulatedQuantity + cartItem.quantity
// }, 0)