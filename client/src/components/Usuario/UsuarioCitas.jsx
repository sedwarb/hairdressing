import React from 'react'
import {verificarUsuario} from '../constAndFunctions/entries/onSubmit'
import { handleChange } from '../constAndFunctions/entries/handleChange'


export function UsuarioCitas({entries,setEntries}){
    return(
        <>
            <div className="p-2">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">ID</span>
                    </div>
                    <input 
                        onChange={e => handleChange(e,setEntries,entries)} 
                        type="text" 
                        className="form-control" 
                        id="telephone" 
                    />
                </div>
                {entries.findUser ?<div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Nombre</span>
                    </div>
                    <input 
                        onChange={e => handleChange(e,setEntries,entries)} 
                        type="text" 
                        className="form-control" 
                        id="userName" 
                    />
                </div>:<div></div>}
                <div>
                    <button 
                        onClick={() => verificarUsuario(entries,setEntries)} 
                        type='button'  
                        className="btn btn-outline-success w-100">
                            {entries.findUser ? "Guardar Usuario" : "Buscar Usuario"}
                    </button>
                </div>
            </div>
        </>
    )
}