import React from 'react';
import { connect } from 'react-redux';
import { budgetCalculation } from '../../selectors/budgetCalculation';
// import './Header.css';

const Header = (props) => {
  const { totalBudget } = props.total;
  return(
    <header className="header">
      <h1 className="header__title">
        <span>Budget</span><span>April</span><span>{ totalBudget }</span>
      </h1>
    </header>
  )
}


const mapStateToProps = ({ budget = {} }={}) => ({
  total: budgetCalculation(budget)
})

export default connect(mapStateToProps)(Header);
