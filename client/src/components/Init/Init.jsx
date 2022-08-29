import React from 'react'
import { Link } from 'react-router-dom';

export function Init(){
    return(
        <>
            <div className="d-flex justify-content-center"><h1>Seleccione Su Opcion</h1></div>
            <div>
                <div className='d-flex justify-content-center p-3'>
                <button type='submit' className="btn btn-light"><Link to={`/entries`}>Ingreso de Entradas</Link></button>
                </div>
                <div className='d-flex justify-content-center p-3'>
                    <button type='submit' className="btn btn-light"><Link to={`/table`}>Mostrar Entradas</Link></button>
                </div>
                <div className='d-flex justify-content-center p-3'>
                    <button type='submit' className="btn btn-light"><Link to={`/info`}>Mostrar Informacion</Link></button>
                </div>
            </div>
        </>
    )
}