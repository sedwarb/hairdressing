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
import { Autenticar } from './components/Autenticar/Autenticar'
import { NavbarUser } from './components/Navbar/NavbarUser'
import { Facturar } from './components/Facturar/Facturar'

const pathU = {
  user:"11711511797114105111",
  admin:"971171161011101161059997114",
  entradas:"69110116114105101115",
  citas:"109101101116105110103",
  reportes:"849798108101",
  facturar:"102979911611711497114",
  usuarios:"85115101114849798108101",
  servicios:"8310111411810599101849798108101",
  trabajador:"87111114107101114849798108101",
  productos:"11211411110011799116111115"
}

function App() {
  return (
    <React.StrictMode>
      <Route exact path="/" component={Autenticar}></Route>
      <Route path={`/${pathU.user}`} component={NavbarUser}></Route>
      <Route exact path={`/${pathU.user}`} component={Init}></Route>
      <Route path={`/${pathU.admin}`} component={Navbar}></Route>
      <Route exact path={`/${pathU.admin}`} component={Init}></Route>
      <Route exact path={`/${pathU.admin}/${pathU.entradas}`} component={Oentries}></Route>
      <Route exact path={`/${pathU.admin}/${pathU.citas}`} component={Citas}></Route>
      <Route exact path={`/${pathU.admin}/${pathU.reportes}`} component={ShowMeTables}></Route>      
      <Route exact path={`/${pathU.user}/${pathU.entradas}`} component={Oentries}></Route>
      <Route exact path={`/${pathU.user}/${pathU.citas}`} component={Citas}></Route>
      <Route exact path={`/${pathU.user}/${pathU.reportes}`} component={ShowMeTables}></Route>
      <Route exact path={`/${pathU.admin}/${pathU.facturar}`} component={Facturar}></Route>
      <Route exact path={`/${pathU.admin}/${pathU.usuarios}`} component={TablaUsuario}></Route>
      <Route exact path={`/${pathU.admin}/${pathU.servicios}`} component={TablaServicios}></Route>
      <Route exact path={`/${pathU.admin}/${pathU.trabajador}`} component={TablaTrabaja}></Route>
      <Route exact path={`/${pathU.admin}/${pathU.productos}`} component={TablaProductos}></Route>
    </React.StrictMode>
  );
}

export default App;
