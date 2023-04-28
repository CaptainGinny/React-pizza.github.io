import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

export default function Pagination() {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={2}
        pageRangeDisplayed={8}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  )
}
