import React from 'react'
import { mostrar } from '../constAndFunctions/entries/mostrar'
import {verificarUsuario} from '../constAndFunctions/entries/onSubmit'
import { handleChange } from '../constAndFunctions/entries/handleChange'


export function Usuario({entries,setEntries,css,setCss}){
    return(
        <>
            <div className="p-2">
                <div className="input-group mb-3">
                    {/*<div className="input-group-prepend">
                        <span className="input-group-text">ID</span>
    </div>*/}
                    <button onClick={()=>mostrar(entries,setEntries,css,setCss)} type="button" className="btn btn-info w-100" id="btnUser" data-toggle="collapse" data-target="#collapseUser" aria-controls="collapseExample">{entries.telephone?entries.telephone:"ID"}</button>
                    {/*<input onClick={()=>mostrar(entries,setEntries,css,setCss)} type="text" className="input-group-text" id="basic-addon3" data-toggle="collapse" data-target="#collapseUser" aria-controls="collapseExample" placeholder='Identificacion' />*/}
                </div>
                <div className="collapse" id="collapseUser">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">ID</span>
                        </div>
                        <input onChange={e => handleChange(e,setEntries,entries)} type="text" className="form-control" id="telephone" aria-describedby="basic-addon3" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">Nombre</span>
                        </div>
                        <input onChange={e => handleChange(e,setEntries,entries)} type="text" className="form-control" id="userName" aria-describedby="basic-addon3" />
                    </div>
                    <div>
                        <button type='button' onClick={() => verificarUsuario(entries)} className="btn btn-success w-100">{entries.findUser ? "Guardar Usuario" : "Buscar Usuario"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}