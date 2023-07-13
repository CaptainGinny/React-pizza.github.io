import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

    return (
    <div className="categories">
      <ul>
        {categories.map((catergoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : ''}>
            {catergoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;