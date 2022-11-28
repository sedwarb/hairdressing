import React from 'react'
import { handleChange } from '../../constAndFunctions/entries/handleChange'

export function CitasInput({datos}){
    return(
        <>            
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">{datos.nombre}</span>
                </div>
                <input 
                    onChange={(e)=>handleChange(e,datos.set,datos.sta)} 
                    type={datos.tipo} 
                    id={datos.nombre.toLowerCase()}  
                    className="form-control" 
                    aria-label="Username" 
                    aria-describedby="basic-addon3" />
            </div>
        </>
    )
}