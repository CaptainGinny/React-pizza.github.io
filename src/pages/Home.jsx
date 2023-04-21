import React from 'react'

import Categories from '../сomponents/Categories';
import Sort from '../сomponents/Sort';
import PizzaBlock from '../сomponents/PizzaBlock';
import Skeleton from '../сomponents/PizzaBlock/Skeleton';


export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://6419b14fc152063412c93ba7.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsloading(false);
      });
      window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
        <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  )
}
