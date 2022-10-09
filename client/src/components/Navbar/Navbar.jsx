import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand">Dwfer</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <p className="nav-link"><NavLink exact to="/">Inicio</NavLink></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"><NavLink exact to="/Entries">Entradas</NavLink></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"><NavLink exact to="/Table">Registros</NavLink></p>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Informacion
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <p className="dropdown-item"><NavLink exact to="/info" >Usuarios</NavLink></p>
                                <p className="dropdown-item"><NavLink exact to="/info" >Trabajadores</NavLink></p>
                                <p className="dropdown-item"><NavLink exact to="/info" >Servicios</NavLink></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}