import './App.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Marvel from './components/Pages/Marvel';
import Alert from './components/Alert'
import Results from './components/Results'

import {Provider} from 'react-redux'
import store from './store'



const App = () => {
  return (
    <Provider store={store}>
    <>
    <Router>
      <NavBar/>
      <Alert />
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/results' component={Results}/>
          <Route exact path='/marvel' component={Marvel}/>
          
      </Switch>
    </Router>
    </>
    </Provider>

  );
}

export default App;
