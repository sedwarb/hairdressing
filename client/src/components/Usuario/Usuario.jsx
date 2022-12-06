import React from 'react'
import {verificarUsuario} from '../constAndFunctions/entries/onSubmit'
import { handleChange } from '../constAndFunctions/entries/handleChange'

export function Usuario({entries,setEntries}){
    return(
        <>
            <div className="p-2">
                <div className="input-group mb-3">                    
                    <button
                        type="button" 
                        className="btn btn-outline-info btn-sm" 
                        id="btnUser" 
                        data-toggle="collapse" 
                        data-target="#collapseUser" 
                        aria-controls="collapseExample">
                            {"ID Cliente"}
                    </button>
                </div>
                <div className="collapse" id="collapseUser">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">ID</span>
                        </div>
                        <input 
                            onChange={e => handleChange(e,setEntries,entries)} 
                            type="text" 
                            className="form-control" 
                            id="telephone" 
                            aria-describedby="basic-addon3"
                        />
                    </div>
                    {
                        entries.findUser?
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Nombre</span>
                            </div>
                            <input 
                                onChange={e => handleChange(e,setEntries,entries)} 
                                type="text" 
                                className="form-control" 
                                id="userName" 
                                aria-describedby="basic-addon3"
                            />
                        </div>:
                        <div></div>
                    }
                    <div>
                        <button 
                            type='button' 
                            onClick={() => verificarUsuario(entries,setEntries)} 
                            className="btn btn-outline-success btn-sm">
                                {entries.findUser ? "Guardar Cliente" : "Buscar Cliente"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}