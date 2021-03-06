import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import store from './store';
import Header from './common/header';
import Login from './pages/login';
import Write from './pages/Write';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home} ></Route>
              <Route path='/login' exact component={Login} ></Route>
              <Route path='/Write' exact component={Write} ></Route>
              <Route path='/detail/:id' exact component={Detail} ></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
