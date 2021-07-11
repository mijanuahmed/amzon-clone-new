export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [action.payload, ...state.basket],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.payload),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
