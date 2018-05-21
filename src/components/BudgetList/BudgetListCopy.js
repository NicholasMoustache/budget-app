import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filterData from '../../selectors/getFilteredData';
import BudgetListItem from '../BudgetListItem/BudgetListItem';
import BudgetEditForm from '../BudgetEditForm/BudgetEditForm';
import BudgetListFilters from '../BudgetListFilters/BudgetListFilters';
import { 
  startEdit, 
  removeData,
  removeAllData,
  editData,
  cancelEdit,
  textFilter,
  sortData } from '../../actions/index';

const BudgetList = (props) => {
  const { type } = props;
  return (
    <div className="budget-list">
      <h1 className="budget-list__title"> {type.toUpperCase()} </h1>
      <BudgetListFilters {...props} />
      {props[type].map(data=>{
        if(!data.edit) {
          return <BudgetListItem
              {...data}
              {...props}
              key={data.id} />
        } 
          return <BudgetEditForm
              {...data}
              {...props}
              key={data.id} />
        })}
    </div>
  )
}

const mapStateToProps = ({ budget, filters }, { type })=>({ 
  [type]: filterData(budget[type], filters[type]), 
  filters 
});
const mapDispatchToProps =(dispatch) => {
  return bindActionCreators({
    startEdit, 
    removeData,
    removeAllData,
    editData,
    cancelEdit,
    textFilter,
    sortData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetList);


    // if (type==='reset') {
    //   this.setState(()=>({ page: 1}));
    // } else if (type === 'decrease') {
    //   if (this.state.page > 1) {
    //     this.setState((prevState)=>({ page: prevState.page -1}))
    //   }
    //   return;
    // } else if (type === 'increase') {
    //     this.setState((prevState)=>({ page: prevState.page +1 }))
    // }