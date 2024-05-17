import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sort, setSort] = React.useState({ name: 'популярности', sort: 'rating' });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://13ff12425e4c1706.mokky.dev/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sort}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort sort={sort} onClickSort={(i) => setSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
