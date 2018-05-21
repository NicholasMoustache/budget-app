import React, { Component, Fragment } from 'react';
import AddButtons from '../AddButtons/AddButtons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addData, setActiveOption } from '../../actions/index';


class BudgetController extends Component {
  
  state = {
    description: '',
    amount: '',
    type: 'incomes',
    error: false
  }

  handleDescription=(e)=>{
    const description = e.target.value;
    this.setState(()=>({ description }));
  }
  
  handleAmount=(e)=>{
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(()=>({ amount }));
    }
  }

  handleSelect=(e)=>{
    const type= e.target.value;
    this.setState(()=>({ type }));
    this.props.setActiveOption({ activeOption: type});
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const { description, amount, type } = this.state;
    if(!this.state.description || !this.state.amount) {
      this.setState(()=>({ error: true }));
      setTimeout(()=>{
        this.setState(()=>({ error: false }))
      },2500)
    } else {
      this.setState(()=>({ 
        error: false,
        description: '',
        amount: ''
       }))
      this.props.addData({
        amount: parseFloat(amount, 10), 
        description,  
        type 
      });
    }
  }

  handleOptionSwitch = (type) => {
    this.setState(()=>({ type }));
    this.props.setActiveOption({ activeOption: type});
  }

  render() {
    return (
      <Fragment>
        <AddButtons
          {...this.state} 
          handleOptionSwitch={this.handleOptionSwitch} 
        />
        {this.state.error && <p className="warning"> Please fill up the form </p>}
        
        <form
          className="form"
          onSubmit={this.handleSubmit} 
        >
          <div className="form__select-box">
            <select
              className="form__select"
              onChange={this.handleSelect}
              value={this.state.type} 
            >
              <option className="form__option" value="incomes">+</option>
              <option className="form__option" value="expenses">-</option>
            </select>
          </div>
          <div className="form__input-box">
            <input
              className="form__input"
              placeholder="Add Description"
              type="text"
              autoFocus
              onChange={this.handleDescription}
              value={this.state.description} 
            />
          </div>
          <div className="form__input-box">
            <input
              className="form__input"
              placeholder="Add Amount"
              type="text"
              onChange={this.handleAmount}
              value={this.state.amount} 
            />
          </div>
          <div className="form__btn-box">
            <button className="btn btn--add">+</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addData,
    setActiveOption 
  }, dispatch );
}

export default connect(undefined, mapDispatchToProps)(BudgetController) ;