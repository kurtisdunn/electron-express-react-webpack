import '../../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { HashRouter as Router, Route, Switch, IndexRoute, hashHistory } from 'react-router-dom';

import Config  from '../../utils/config';
import Login from '../../views/login';
import Main from '../../views/main';
import Mainlayout from '../../layouts/main';

console.log('isLoggedIn: ', Config.isLoggedIn);

ReactDOM.render(
  <Router>
    <Mainlayout>
      <Switch>
        <Route exact path="/" render={() =>(
           Config.isLoggedIn ? ( <Route  component={Main} />)
           : (<Route component={Login} />)
         )} />
        {/* <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route path="/shop/cart" component={ ShoppingCart } /> */}
      </Switch>
    </Mainlayout>
  </Router>,
  document.getElementById('root')
);
//
