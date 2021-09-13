import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Marvel from './components/Pages/Marvel';
import Results from './components/Results/Results'
import { CharContext } from './context/CharContext';





const App = () => {

  const [name, setName] = useState("");
  return (
    
    <>
    <Router>
      <NavBar/>
      
      <Switch>
          <Route exact path='/' component={Home}/>
          <CharContext.Provider value={{name, setName}}>
          <Route exact path='/results' component={Results}/>
          <Route exact path='/marvel' component={Marvel}/>
          </CharContext.Provider>
          
      </Switch>
    </Router>
    </>
    

  );
}

export default App;
