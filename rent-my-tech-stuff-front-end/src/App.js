
import React from 'react'
import { Switch,Route } from 'react-router-dom';
import './index.css'
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'


function App() {
  return (
    <div className="App">
      <Navigation/>
      

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>
      </Switch>
      
    </div>
  );
}

export default App;
