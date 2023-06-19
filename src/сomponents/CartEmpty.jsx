import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export default function CartEmpty() {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Корзина пустая <icon></icon>
        </h2>
        <p>
          Вероятней всего, вы не заказывали еще пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейдите на главную страницу.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
}
