import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoaderBlock,
} from "../components";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryItems = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

export default function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);
  const cartItemsArr = [].concat.apply([], Object.values(cartItems));
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback(
    (idx) => {
      dispatch(setCategory(idx));
    },
    [dispatch]
  );

  const onSelectSort = React.useCallback(
    (val) => {
      dispatch(setSortBy(val));
    },
    [dispatch]
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryItems}
          onClickCategory={onSelectCategory}
          activeCategory={category}
        />
        <SortPopup
          onClickSort={onSelectSort}
          activeSortType={sortBy}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items &&
            items.map((pizza) => {
              return (
                <PizzaBlock
                  onAddPizza={onAddPizza}
                  pizzaCount={
                    cartItemsArr
                      .map((item) => item.id)
                      .filter((id) => id === pizza.id).length
                  }
                  {...pizza}
                  key={pizza.id}
                />
              );
            })
          : Array(12)
              .fill(0)
              .map((_, idx) => <PizzaLoaderBlock key={idx} />)}
      </div>
    </div>
  );
}
