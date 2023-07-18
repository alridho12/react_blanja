import React from 'react'

const Pagination = ({totalPost,postPerPage,setCurrentpage}) => {
    let pages =[];
    for (let i= 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i);
    }
  return (
    <>
        {pages.map((page, index) => {
            return <button style={{width:"50px",height:"50px" }} key={index} onClick={() => setCurrentpage(page)}>{page}</button>})}
        </>
  )
}

export default Pagination