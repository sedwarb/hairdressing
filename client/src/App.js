import './App.css';
import React from 'react'
import { Route } from  "react-router-dom";
import {Entries} from './components/entries/Entries'
import {ShowTable} from './components/ShowTable/ShowTable'
import {BotonesEntries} from './components/BotonesEntries/BotonesEntries'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/Entries" component={Entries}></Route>
      <Route exact path="/Table" component={ShowTable}></Route>
      <Route exact path="/botones" component={BotonesEntries}></Route>
    </React.Fragment>
  );
}

export default App;
