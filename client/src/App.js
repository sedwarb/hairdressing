import './App.css';
import React from 'react'
import { Route } from  "react-router-dom";
import {Entries} from './components/entries/Entries'
import {ShowTable} from './components/ShowTable/ShowTable'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/Entries" component={Entries}></Route>
      <Route exact path="/Table" component={ShowTable}></Route>
    </React.Fragment>
  );
}

export default App;
