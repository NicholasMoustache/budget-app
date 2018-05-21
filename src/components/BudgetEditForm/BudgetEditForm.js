import React, { Component, Fragment } from 'react';


class BudgetEditForm extends Component {
  
  state = {
    description: this.props.description,
    amount: this.props.amount,
    error: false,
  }

  handleAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(()=>({ amount }));
    }
  }

  handleDescription = (e) => {
    const description = e.target.value;
    this.setState(()=>({ description }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const update = {
      id: this.props.id,
      type: this.props.type,
      description: this.state.description,
      amount: parseFloat(this.state.amount,10),
      edit: false
    };
    if(!update.amount || !update.description ) {
      this.setState(()=>({ error: true }));
      setTimeout(()=>{
        this.setState(()=>({ error: false }))
      },2500);
    } else {
      this.setState(()=>({ error: false }))
      this.props.editData(update);
    }
    
  }

  handleCancel = () => {
    const { id, type } = this.props;
    this.props.cancelEdit({ id, type });
  }
  

  render() {
    return (
      <Fragment>
        {this.state.error && <p className="warning warning--small"> Please fill up the blanks and press submit </p>}
        <div className="edit-item">
          <form 
            className="edit-item__form"
            onSubmit={this.handleSubmit}
          >
            <input
              autoFocus
              type="text"
              className="edit-item__input"
              onChange={this.handleDescription}
              value={this.state.description} 
            />
            <input
              type="text"
              className="edit-item__input" 
              value={this.state.amount}
              onChange={this.handleAmount} 
            />   
            <button
              className="btn btn--submit"> 
              Submit 
            </button>
          </form>
          <button
            className="btn btn--cancel" 
            onClick={this.handleCancel}> 
            Cancel 
          </button>
        </div>
      </Fragment>
    );
  }
}


export default BudgetEditForm;