import './App.css';
import React from 'react'
import { Route } from  "react-router-dom"
import {ShowTable} from './components/ShowTable/ShowTable'
import {ShowMeTables} from './components/ShowMeTables/ShowMeTables'
import { Init } from './components/Init/Init';
import {Oentries} from './components/entries/Oentries'
import {Navbar} from './components/Navbar/Navbar'

function App() {
  return (
    <React.StrictMode>
      <Route path="/" component={Navbar}></Route>
      <Route exact path="/" component={Init}></Route>
      <Route exact path="/Entries" component={Oentries}></Route>
      <Route exact path="/Table" component={ShowMeTables}></Route>
      <Route exact path="/info" component={ShowTable}></Route>
    </React.StrictMode>
  );
}

export default App;
