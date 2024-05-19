import React from 'react'

import styles from './Search.module'

const Search = () => {
  return (
    <input className={styles.root} placeholder='Поиск пиццы...' />
  )
}

export default Search
