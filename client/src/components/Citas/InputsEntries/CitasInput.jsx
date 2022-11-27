import React from 'react'
import { handleChange } from '../../constAndFunctions/entries/handleChange'

export function CitasInput({setStateGen,stateGen,nombre,iden,tipo}){
    return(
        <>            
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">{nombre}</span>
                </div>
                <input 
                    onChange={(e)=>handleChange(e,setStateGen,stateGen)} 
                    type={tipo} 
                    id={iden}  
                    className="form-control" 
                    aria-label="Username" 
                    aria-describedby="basic-addon3" />
            </div>
        </>
    )
}