import produce from "immer";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = produce((draft = initialState, action) => {
  const updatePriceCount = () => {
    const itemsArr = [].concat.apply([], Object.values(draft.items));
    draft.totalCount = itemsArr.length;
    draft.totalPrice = itemsArr.reduce((acc, curr) => acc + curr.price, 0);
  };

  const pizzaGroup = () =>
    draft.items[action.payload.type + action.payload.size + action.payload.id];
  switch (action.type) {
    case "ADD_PIZZA_CART":
      if (pizzaGroup()) {
        pizzaGroup().push(action.payload);
      } else {
        draft.items[
          action.payload.type + action.payload.size + action.payload.id
        ] = [action.payload];
      }
      updatePriceCount();
      break;

    case "CLEAR_CART":
      draft.items = {};
      updatePriceCount();
      break;

    case "REMOVE_PIZZA":
      delete draft.items[
        action.payload.type + action.payload.size + action.payload.id
      ];
      updatePriceCount();
      break;
    case "PLUS_PIZZA":
      pizzaGroup().push(action.payload);
      updatePriceCount();
      break;
    case "MINUS_PIZZA":
      pizzaGroup().length > 1 && pizzaGroup().splice(-1);
      updatePriceCount();
      break;

    default:
      return draft;
  }
});

export default cart;
