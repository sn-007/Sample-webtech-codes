import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


import Home from './components/templates/Home'
import newDonation from './components/DFS/newDonation';
import listdonations from './components/DFS/listdonations';




function App() {
  return (
    <Router>
      <div className="container">
        
        <Route path="/" exact component={Home}/>
        <Route path="/newdonation" exact component={newDonation}/>
        <Route path="/listdonations" exact component={listdonations}/>
        


      </div>
    </Router>
  );
}

export default App;
