import './App.css';
import React from 'react'
import { Route } from  "react-router-dom"
import {ShowMeTables} from './components/ShowMeTables/ShowMeTables'
import { Init } from './components/Init/Init';
import {Oentries} from './components/entries/Oentries'
import {Navbar} from './components/Navbar/Navbar'
import { TablaUsuario } from './components/ShowTable/TablaUsuarios'
import { TablaServicios } from './components/ShowTable/TablaServicios'
import { TablaTrabaja } from './components/ShowTable/TablaTrabaja'
import { Citas } from './components/Citas/Citas'
import { TablaProductos } from './components/ShowTable/TablaProductos'
import { Autenticar } from './components/Autenticar/Autenticar';

function App() {
  return (
    <React.StrictMode>
      <Route exact path="/" component={Autenticar}></Route>
      <Route path="/971171161011101161059997114" component={Navbar}></Route>
      <Route exact path="/971171161011101161059997114" component={Init}></Route>
      <Route exact path="/971171161011101161059997114/69110116114105101115" component={Oentries}></Route>
      <Route exact path="/971171161011101161059997114/109101101116105110103" component={Citas}></Route>
      <Route exact path="/971171161011101161059997114/849798108101" component={ShowMeTables}></Route>
      <Route exact path="/971171161011101161059997114/85115101114849798108101" component={TablaUsuario}></Route>
      <Route exact path="/971171161011101161059997114/8310111411810599101849798108101" component={TablaServicios}></Route>
      <Route exact path="/971171161011101161059997114/87111114107101114849798108101" component={TablaTrabaja}></Route>
      <Route exact path="/971171161011101161059997114/11211411110011799116111115" component={TablaProductos}></Route>
    </React.StrictMode>
  );
}

export default App;
