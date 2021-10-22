import { createSelector } from "reselect";

const seletCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
        0
    )
);

