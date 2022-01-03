import produce from "immer";

const initialState = {
  items: [],
  isLoaded: false,
};

// const pizzas = produce((draft = initialState, action) => {
//   switch (action.type) {
//     case "SET_PIZZAS":
//       draft.push(action.payload);
//       draft.isLoaded = true;
//       break;
//     case "SET_LOADED":
//       draft.isLoaded = action.payload;
//       break;

//     default:
//       return draft;
//   }
// });

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default pizzas;
