import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filterData from '../../selectors/getFilteredData';

import BudgetListItem from '../BudgetListItem/BudgetListItem';
import BudgetEditForm from '../BudgetEditForm/BudgetEditForm';
import BudgetListFilters from '../BudgetListFilters/BudgetListFilters';
import PaginationBtns from '../PaginationBtns/PaginationBtns';

import { 
  startEdit, 
  removeData,
  removeAllData,
  editData,
  cancelEdit,
  textFilter,
  sortData } from '../../actions/index';

class BudgetList extends Component {

  state = {
    page: 1,
    modalIsOpen: false
  }

  handlePageChange = (type) => {
    switch(type) {
      case 'reset':
        return this.setState(()=>({ page: 1}));  
      case 'decrease':
        if(this.state.page > 1) {
          return this.setState((prevState)=>({ page: prevState.page -1}));
        }
      case 'increase':
        return this.setState((prevState)=>({ page: prevState.page +1 }));
    }
  }

  openModal = () => this.setState(()=>({ modalIsOpen: true }));

  closeModal = () => this.setState(()=>({ modalIsOpen: false }));

  // afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   // this.subtitle.style.color = '#f00';
  // }

  


  render() {
    const { type } = this.props;
    const limit = 4;
    const start = (this.state.page - 1) * limit;
    const end = start + limit; 
    const pages = Math.ceil(this.props[type].length / limit);

    let budgetList = this.props.filters.activeOption === type ? "budget-list budget-list--active": "budget-list";
    let listTitle = this.props.filters.activeOption === type ? "budget-list__title budget-list__active" : 'budget-list__title';


    return (
      <div className={budgetList}>
        <h1 className={listTitle}> {type.toUpperCase()} </h1>
        <BudgetListFilters 
          {...this.props}
          modalIsOpen={this.state.modalIsOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          afterOpenModal={this.afterOpenModal} 
          handlePageChange={this.handlePageChange}
        />
        {this.props[type].slice(start, end).map(data=>{
          if(!data.edit) {
            return <BudgetListItem
                {...data}
                {...this.props}
                list={this.props[type]}
                key={data.id}
                pages={pages}
                limit={limit}
                page={this.state.page}
                handlePageChange={this.handlePageChange}/>
          } 
            return <BudgetEditForm
                {...data}
                {...this.props}
                key={data.id} />
          })}
          {this.props[type].length > limit ?
          <PaginationBtns
            limit={limit}
            items={this.props[type]}
            page={this.state.page}
            pages={pages}
            handlePageChange={this.handlePageChange}/>:
          null}

      </div>
    )
  }
  
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