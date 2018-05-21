import React from 'react';

const PaginationBtns = ({ page, pages, handlePageChange, items, limit }) => {
  
  const createBtns = () => {
    if(page === 1) {
      return (
        <button 
          className="btn btn--page btn--page-next" 
          onClick = {()=>handlePageChange('increase')}
        > 
          {`Page ${page +1}`} 
        </button>
      )
    } else if (page === pages ) {
      return (
        <button className="btn btn--page" 
          onClick = {()=>handlePageChange('decrease')}
        > 
          {`Page ${page -1}`} 
        </button>
      )
    } else if (page < pages ) {
      return (
        <div className="pagination__box">
          <button 
            className="btn btn--page" 
            onClick = {()=>handlePageChange('decrease')}
          > 
            {`Page ${page -1}`} 
          </button>
          <button 
            className="btn btn--page btn--page-next" 
            onClick = {()=>handlePageChange('increase')}
          > 
            {`Page ${page + 1}`}
          </button>
        </div>
      )
    } 
  }

  // const buttons = createBtns();

  return (
    <div className="pagination">
      {createBtns()}
    </div>
  )
}

export default PaginationBtns;