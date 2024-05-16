import React from 'react';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [active, setActive] = React.useState(0);
  const activeIndex = (i) => {
    setActive(i);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value,i) => (
          <li key={i} onClick={() => activeIndex(i)} className={active === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
