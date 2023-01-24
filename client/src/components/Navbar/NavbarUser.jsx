import React from 'react'
import { NavLink } from 'react-router-dom'

export function NavbarUser(){
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
                                <NavLink exact to="/11711511797114105111/69110116114105101115">Entradas</NavLink>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">
                                <NavLink exact to="/11711511797114105111/109101101116105110103">Citas</NavLink>
                            </p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">
                                <NavLink exact to="/11711511797114105111/849798108101">Registros</NavLink>
                            </p>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </>
    )
}