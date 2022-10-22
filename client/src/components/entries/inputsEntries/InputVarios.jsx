import React from 'react'
import { handleChange } from '../../constAndFunctions/entries/handleChange'

export function InputVarios({conf,estado,dato}){
    return(
        <>            
            <div className="p-2">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">{dato===1?"Servi. M.":"Precio. M."}</span>
                    </div>
                    <input onChange={e => handleChange(e,conf,estado)} type="text" className="form-control" id={dato===1?"manualEntry":"amountEntry"} aria-describedby="basic-addon3" />
                </div>
            </div>
        </>
    )
}