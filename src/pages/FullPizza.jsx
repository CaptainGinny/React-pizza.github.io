import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FullPizza() {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://6419b14fc152063412c93ba7.mockapi.io/items/` + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка...';
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
}
