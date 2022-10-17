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
                            <p className="nav-link"><NavLink exact to="/69110116114105101115">Entradas</NavLink></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"><NavLink exact to="/109101101116105110103">Citas</NavLink></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"><NavLink exact to="/849798108101">Registros</NavLink></p>
                        </li>
                        <li className="nav-item dropdown">
                            <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Informacion</p>                            
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <p className="dropdown-item"><NavLink exact to="/85115101114849798108101" >Clientes</NavLink></p>
                                <p className="dropdown-item"><NavLink exact to="/87111114107101114849798108101" >Trabajadores</NavLink></p>
                                <p className="dropdown-item"><NavLink exact to="/8310111411810599101849798108101" >Servicios</NavLink></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}