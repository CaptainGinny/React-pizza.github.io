import React from 'react';
import Header from './сomponents/Header';
import Categories from './сomponents/Categories';
import Sort from './сomponents/Sort';
import PizzaBlock from './сomponents/PizzaBlock';

import './scss/app.scss';

function App() {
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
            <PizzaBlock title={obj.title} price="395" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
