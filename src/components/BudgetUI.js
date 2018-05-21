import React from 'react';
import BudgetList from '../BudgetList/BudgetList';
// import './BudgetUI.css';

const BudgetUI = () => (
  <section className="budget">
    <BudgetList type="incomes"  />
    <BudgetList type="expenses" />
  </section>
);

export default BudgetUI;