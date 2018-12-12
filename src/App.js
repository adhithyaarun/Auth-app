import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Login from './components/Login';
import Navbar from './components/Navbar';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Login />
        </div>
      </Provider>
    );
  }
}

export default App;
