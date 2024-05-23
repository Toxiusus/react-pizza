import React from 'react';

import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import search from '../../assets/img/search.svg';
import close from '../../assets/img/close.svg';
import { SearchContext } from '../../App';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('')
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 350),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {value && <img onClick={onClickClear} className={styles.close} src={close} alt="close" />}
    </div>
  );
};

export default Search;
