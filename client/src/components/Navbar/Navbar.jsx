import React from 'react'
import { NavLink } from 'react-router-dom'
import { pathU } from '../constAndFunctions/constAndFunions'

export function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand">Dwfer</p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <p className="nav-link"><NavLink exact to="/">Inicio</NavLink></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">
                                <NavLink exact to={`/${pathU.admin}/${pathU.entradas}`}>
                                    Entradas
                                </NavLink>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">
                                <NavLink exact to={`/${pathU.admin}/${pathU.citas}`}>
                                    Citas
                                </NavLink>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">
                                <NavLink exact to={`/${pathU.admin}/${pathU.reportes}`}>
                                    Registros
                                </NavLink>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">
                                <NavLink exact to={`/${pathU.admin}/${pathU.facturar}`}>
                                    Facturar
                                </NavLink>
                            </p>
                        </li>
                        <li className="nav-item dropdown">
                            <p 
                                className="nav-link dropdown-toggle" 
                                id="navbarDropdown" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                                    Informacion
                            </p>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">                                
                                <p className="dropdown-item">
                                    <NavLink exact to={`/${pathU.admin}/${pathU.usuarios}`}>
                                        Clientes
                                    </NavLink>
                                </p>
                                <p className="dropdown-item">
                                    <NavLink exact to={`/${pathU.admin}/${pathU.trabajador}`}>
                                        Trabajadores
                                    </NavLink>
                                </p>
                                <p className="dropdown-item">
                                    <NavLink exact to={`/${pathU.admin}/${pathU.servicios}`}>
                                        Servicios
                                    </NavLink>
                                </p>
                                <p className="dropdown-item">
                                    <NavLink exact to={`/${pathU.admin}/${pathU.productos}`}>
                                        Productos
                                    </NavLink>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}