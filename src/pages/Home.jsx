import React from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Categories from '../сomponents/Categories';
import Sort from '../сomponents/Sort';
import PizzaBlock from '../сomponents/PizzaBlock';
import Skeleton from '../сomponents/PizzaBlock/Skeleton';
import Pagination from '../сomponents/Pagination';
import { SearchContext } from '../App';

export default function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setIsloading(true);
    axios
      .get(
        `https://6419b14fc152063412c93ba7.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty}&order=desc`,
      )
      .then((res) => {
        setItems(res.data);
        setIsloading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination />
    </div>
  );
}
