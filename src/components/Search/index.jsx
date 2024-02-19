import React from "react";

import logoSearch from "../../assets/img/search.svg";
import logoClose from "../../assets/img/close.svg";
import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={logoSearch} alt="search" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img className={styles.clearIcon} src={logoClose} alt="close" />
      )}
    </div>
  );
};

export default Search;
