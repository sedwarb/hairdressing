import './App.css';
import React from 'react'
import { Route } from  "react-router-dom"
import {ShowMeTables} from './components/ShowMeTables/ShowMeTables'
import { Init } from './components/Init/Init';
import {Oentries} from './components/entries/Oentries'
import {Navbar} from './components/Navbar/Navbar'
import { TablaUsuario } from './components/ShowTable/TablaUsuarios'
import { TablaServicios } from './components/ShowTable/TablaServicios'
import { TablaTrabaja } from './components/ShowTable/TablaTrabaja';

function App() {
  return (
    <React.StrictMode>
      <Route path="/" component={Navbar}></Route>
      <Route exact path="/" component={Init}></Route>
      <Route exact path="/Entries" component={Oentries}></Route>
      <Route exact path="/Table" component={ShowMeTables}></Route>
      <Route exact path="/UserTable" component={TablaUsuario}></Route>
      <Route exact path="/ServiceTable" component={TablaServicios}></Route>
      <Route exact path="/WorkerTable" component={TablaTrabaja}></Route>
    </React.StrictMode>
  );
}

export default App;
