import './App.css';
import React from 'react'
import { Route } from  "react-router-dom";
import {Entries} from './components/entries/Entries'
import {ShowTable} from './components/ShowTable/ShowTable'
import {ShowChart} from './components/ShowChart/ShowChart'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/Entries" component={Entries}></Route>
      <Route exact path="/Table" component={ShowTable}></Route>
      <Route exact path="/chart" component={ShowChart}></Route>
    </React.Fragment>
  );
}

export default App;
