import React from 'react';

import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import search from '../../assets/img/search.svg';
import close from '../../assets/img/close.svg';
import { SearchContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();

  const testDebounce = React.useCallback(
    debounce(() => {
      console.log('hello');
    }, 1000),
    [],
  );

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
    testDebounce();
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        ref={inputRef}
        value={searchValue}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img onClick={onClickClear} className={styles.close} src={close} alt="close" />
      )}
    </div>
  );
};

export default Search;
