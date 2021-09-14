
import React from 'react'
import { Switch,Route } from 'react-router-dom';
import './index.css'


import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'
import ProtectedRoute from './utils/ProtectedRoute'
import Owner from './components/Owner'
import Renter from './components/Renter'


function App() {
  return (
    <div className="App">
      <Navigation/>
      

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>
        <ProtectedRoute exact path = '/Owner' component={Owner}/>
        <ProtectedRoute exact path = '/Renter' component={Renter}/>
      </Switch>
      
    </div>
  );
}

export default App;
