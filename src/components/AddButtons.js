import React from 'react';

const AddButtons = ({ type, handleOptionSwitch }) => {
  
  let btnInc = type === 'incomes' ? 'btn btn--big btn--active' : 'btn btn--big';
  let btnExp = type === 'expenses' ? 'btn btn--big btn--active' : 'btn btn--big';

  return (
    <div className="btn-group">
      <button
        className={btnInc}
        onClick={()=>handleOptionSwitch('incomes')}> ADD INCOME </button>
      <button
        className={btnExp} 
        onClick={()=>handleOptionSwitch('expenses')}> ADD EXPENSE </button>
    </div>
  )
}

export default AddButtons;