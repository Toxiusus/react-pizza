import React from 'react'

import styles from './Search.module.scss'
import search from '../../assets/img/search.svg'

const Search = () => {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="search" />
      <input className={styles.input} type="text" placeholder='Поиск пиццы...'/>
    </div>
  )
}

export default Search
