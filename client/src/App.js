import './App.css';
import React from 'react'
import { Route } from  "react-router-dom";
import {Entries} from './components/entries/Entries'
import {Table} from './components/Table/Table'

function App() {
  return (
    <React.Fragment>
      <Route exact path="/Entries" component={Entries}></Route>
      <Route exact path="/Table" component={Table}></Route>
    </React.Fragment>
  );
}

export default App;
