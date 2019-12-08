import React from 'react';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Preview from './components/Preview'
import Medicine from './components/medicine/Medicine'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'


import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (

      <HashRouter>
        <Switch>
          <Route exact path='/' exact component={Login} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/Preview' component={Preview} />
          <Route path='/Medicine' component={Medicine} />
          <Route path='/Home' component={Home} />
          <Route path='/Cart' component={Cart} />

        </Switch>
    </HashRouter>
  );
}

export default App;
