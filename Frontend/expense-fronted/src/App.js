import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation'
import Content from './components/content'
import LowBar from './components/LowBar'
import initWallet from './components/initWallet'
function App() {
  
  return (
    
   <Router>
    
     <Navigation/>
     
       <Route path="/" exact component={initWallet}/>
     
     <Route path="/" exact component={Content}/>};
       <LowBar/>
    </Router>
   
  );
}

export default App;
