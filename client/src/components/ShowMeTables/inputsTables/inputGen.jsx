import React from 'react'
import { handleChange } from '../../constAndFunctions/entries/handleChange'
import { tableFilter } from '../../constAndFunctions/constAndFunions'

export function InputGen({conf,estado,nombre,iden,tipo}){
    return(
        <>
            {
                nombre==="Tipo"?
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="tipo">Tipo</span>
                        </div>
                        <select className="form-label form-control" onChange={(e) => conf({ ...estado, typed: e.currentTarget.value })}>
                            <option className="list-group-item">...Seleccione</option>
                            {tableFilter && tableFilter.map(date => <option className="list-group-item" key={date.str} value={date.str}>{date.name}</option>)}
                        </select>
                    </div>
                </div>:
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="fecha-inicio">{nombre}</span>
                        </div>
                        <input onChange={(e)=>handleChange(e,conf,estado)} id={iden} type={tipo} className="form-control" aria-label="Username" aria-describedby="fecha-inicio" />
                    </div>
                </div>
            }
        </>
    )
}