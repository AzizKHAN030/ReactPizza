export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});
export const clearCart = () => ({
  type: "CLEAR_CART",
});
export const removePizza = (pizzaObj) => ({
  type: "REMOVE_PIZZA",
  payload: pizzaObj,
});
export const plusPizza = (pizzaObj) => ({
  type: "PLUS_PIZZA",
  payload: pizzaObj,
});
export const minusPizza = (pizzaObj) => ({
  type: "MINUS_PIZZA",
  payload: pizzaObj,
});
