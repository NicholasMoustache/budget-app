import React from 'react';

const BudgetListItem = (props)=> {
  const {
    id,
    pages,
    page,
    limit,
    description, 
    amount, 
    startEdit,
    removeData,
    type,
    handlePageChange } = props;
  
  const handleEdit = () => {
    startEdit({id, type });
  }

  const handleRemove = () => {
    if(limit*pages-props[type].length === limit-1){
      if(page > 1) {
        handlePageChange('decrease');
      }
    }
    
    removeData({id, type})
  }
  // console.log('limit:', limit);
  // console.log('Pages:', pages);
  // console.log('Length:', props[type].length);

  return (
    <div className="budget-list__item">
      <h2  className="budget-list__item-title">
        <span>{ `${description}:` }</span><span>{ amount }</span>
      </h2>
      <button
        className="btn btn--edit"
        onClick={handleEdit}> Edit
      </button> 
      <button
        className="btn btn--remove"
        onClick={handleRemove}> Remove 
      </button>
    </div> 
  );
}


 


export default BudgetListItem;