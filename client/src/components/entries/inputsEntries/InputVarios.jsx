import React from 'react'
import { handleChange } from '../../constAndFunctions/entries/handleChange'

export function InputVarios({conf,estado,nombre,iden,tipo}){
    return(
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">{nombre}</span>
                </div>
                <input 
                    onChange={e => handleChange(e,conf,estado)} 
                    type={tipo} 
                    className="form-control" 
                    id={iden} 
                    aria-describedby="basic-addon3" 
                />
            </div>
        </>
    )
}