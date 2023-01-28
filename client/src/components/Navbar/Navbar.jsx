import React from 'react'
import { NavLink } from 'react-router-dom'

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
                                <NavLink exact to="/971171161011101161059997114/69110116114105101115">Entradas</NavLink>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">
                                <NavLink exact to="/971171161011101161059997114/109101101116105110103">Citas</NavLink>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">
                                <NavLink exact to="/971171161011101161059997114/849798108101">Registros</NavLink>
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
                                    <NavLink exact to="/971171161011101161059997114/85115101114849798108101" >Clientes</NavLink>
                                </p>
                                <p className="dropdown-item">
                                    <NavLink exact to="/971171161011101161059997114/87111114107101114849798108101" >
                                        Trabajadores
                                    </NavLink>
                                </p>
                                <p className="dropdown-item">
                                    <NavLink exact to="/971171161011101161059997114/8310111411810599101849798108101" >
                                        Servicios
                                    </NavLink>
                                </p>
                                <p className="dropdown-item">
                                    <NavLink exact to="/971171161011101161059997114/11211411110011799116111115">
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