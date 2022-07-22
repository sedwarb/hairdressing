import './App.css';
import React from 'react'
import { Route } from  "react-router-dom";
import {Entries} from './components/entries/Entries'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/Entries" component={Entries}></Route>
    </React.Fragment>
  );
}

export default App;
