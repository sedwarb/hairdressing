import React from 'react'
import { mostrar } from '../constAndFunctions/entries/mostrar'
import {verificarUsuario} from '../constAndFunctions/entries/onSubmit'


export function Usuario({entries,setEntries,css,setCss}){
    function handleChange(e){
        setEntries({...entries,[e.target.id]:e.target.value})
    }
    return(
        <>
            <div className="p-2">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">ID</span>
                    </div>
                    <input onClick={()=>mostrar(entries,setEntries,css,setCss)} type="text" className="input-group-text" id="basic-addon3" data-toggle="collapse" data-target="#collapseUser" aria-controls="collapseExample" placeholder='Identificacion' />
                </div>
                <div className="collapse" id="collapseUser">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">ID</span>
                        </div>
                        <input onChange={e => handleChange(e)} type="text" className="form-control" id="telephone" aria-describedby="basic-addon3" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">Nombre</span>
                        </div>
                        <input onChange={e => handleChange(e)} type="text" className="form-control" id="userName" aria-describedby="basic-addon3" />
                    </div>
                    <div>
                        <button type='button' onClick={(e) => verificarUsuario(entries, e)} className="btn btn-success w-100">{entries.findUser ? "Guardar Usuario" : "Buscar Usuario"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}