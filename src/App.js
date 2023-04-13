import React from 'react';
import Header from './сomponents/Header';
import Categories from './сomponents/Categories';
import Sort from './сomponents/Sort';
import PizzaBlock from './сomponents/PizzaBlock';

import './scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Чизбургер-пицца" price="395" />
            <PizzaBlock title="Четыре сезона" price="495" />
            <PizzaBlock title="Сытная пицца" price="595" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
