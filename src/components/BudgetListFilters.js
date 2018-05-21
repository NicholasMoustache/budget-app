import React from 'react';
import AlertModal from '../AlertModal/AlertModal';

const BudgetListFilters = (props) => {
  const { 
    type,
    list,
    removeAllData, 
    textFilter, 
    filters, 
    sortData, 
    openModal, 
    closeModal, 
    afterOpenModal, 
    modalIsOpen,
    handlePageChange } = props;
  
  const handleFilter = (e) => {
    const text = e.target.value;
    textFilter({ text, type });
  }

  const handleSort = (e) => {
    const sortBy = e.target.value;
    sortData({ sortBy, type });
  }


  const handleRemoveAll = () => {
    removeAllData({ type });
    closeModal();
    handlePageChange('reset');
  }
  
  const handleCancel = () => closeModal();

  return(
    <div className="filters">
      <select
        className="filters__sort"
        onChange={handleSort}
        value={filters[type].sortBy}
      >
        <option> sort by</option>
        <option value="highest">highest</option>
        <option value="lowest">lowest</option>
      </select>
      <input
        className="filters__search"
        placeholder="search..."
        type="text"
        onChange={handleFilter}
        value={filters[type].text}
      />
      <button
        disabled={props[type].length > 0 ? false : true}
        className="btn btn--remove-all" 
        onClick={()=>openModal()}
      > 
        Remove All 
      </button>
      <AlertModal
        type={type}
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        handleRemoveAll={handleRemoveAll}
        handleCancel={handleCancel}
      />
    </div>
  )
}

export default BudgetListFilters;