import React, { Fragment } from 'react';
import BudgetController from '../BudgetController/BudgetController';
import BudgetUI from '../BudgetUI/BudgetUI';
// import './Budget.css';


const Budget = () => (
  <Fragment>
    <BudgetController />
    <BudgetUI />
  </Fragment>
)

export default Budget;

