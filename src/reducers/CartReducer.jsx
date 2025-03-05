export const initialState = {
  cartCount: 0,
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, cartCount: state.cartCount + 1 };
    case "decrement":
      return {
        ...state,
        cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0,
      };
    default:
      return state;
  }
};
