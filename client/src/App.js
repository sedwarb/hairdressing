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
      <Route exact path="/69110116114105101115" component={Oentries}></Route>
      <Route exact path="/849798108101" component={ShowMeTables}></Route>
      <Route exact path="/85115101114849798108101" component={TablaUsuario}></Route>
      <Route exact path="/8310111411810599101849798108101" component={TablaServicios}></Route>
      <Route exact path="/87111114107101114849798108101" component={TablaTrabaja}></Route>
    </React.StrictMode>
  );
}

export default App;
