import React, { Component } from 'react';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';
import { rootReducer } from './reducers/index';
import Budget from './components/Budget/Budget';
import Header from './components/Header/Header';
import './styles/App.css'

class App extends Component {
  render() {
    const store = createStore(rootReducer, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store = {store}>
        <div className="App">
          <Header />
          <Budget />
        </div>
      </Provider>
    );
  }
}

export default App;
