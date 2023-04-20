import React from 'react';
import Header from './сomponents/Header';
import Categories from './сomponents/Categories';
import Sort from './сomponents/Sort';
import PizzaBlock from './сomponents/PizzaBlock';
import Skeleton from './сomponents/PizzaBlock/Skeleton';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6419b14fc152063412c93ba7.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <Skeleton key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
