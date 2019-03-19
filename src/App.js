import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
import Header from './common/header';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home} ></Route>
              <Route path='/detail' exact component={Detail} ></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
