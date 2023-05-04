import React from 'react';

import { useSelector } from 'react-redux';

import Categories from '../сomponents/Categories';
import Sort from '../сomponents/Sort';
import PizzaBlock from '../сomponents/PizzaBlock';
import Skeleton from '../сomponents/PizzaBlock/Skeleton';
import Pagination from '../сomponents/Pagination';
import { SearchContext } from '../App';


export default function Home() {

  const categoryId = useSelector((state) => state.filter.categoryId);
  
  
 
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  // const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });


  const onChangeCategory = (id) => {
    console.log(id);
  }

  React.useEffect(() => {
    setIsloading(true);
    fetch(
      `https://6419b14fc152063412c93ba7.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=desc`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsloading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
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
