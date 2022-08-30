import './App.css';
import React from 'react'
import { Route } from  "react-router-dom";
import {Entries} from './components/entries/Entries'
import {ShowTable} from './components/ShowTable/ShowTable'
import {ShowMeTables} from './components/ShowMeTables/ShowMeTables'
import { Init } from './components/Init/Init';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Init}></Route>
      <Route exact path="/Entries" component={Entries}></Route>
      <Route exact path="/Table" component={ShowMeTables}></Route>
      <Route exact path="/info" component={ShowTable}></Route>
    </React.Fragment>
  );
}

export default App;
