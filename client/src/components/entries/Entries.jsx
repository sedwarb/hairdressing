
import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'
import {onSubmit} from '../constAndFunctions/entries/onSubmit'
import {tabla_st} from '../constAndFunctions/entries/usuario'
import {typeList} from '../constAndFunctions/entries/typeList'
import { handleChange } from '../constAndFunctions/entries/handleChange'
import { InputVarios } from './inputsEntries/InputVarios'
import {Usuario} from '../Usuario/Usuario'

export function Entries(){
    const [stateGen,setStateGen] = useState(tabla_st)
    return(
        <>
            <div className="d-flex flex-row justify-content-center"><h2>Registro de Citas</h2></div>
            <div className="d-flex flex-row justify-content-center">                
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['service']} listStP={stateGen}/>
                    <InputVarios conf={setStateGen} estado={stateGen} dato={1}/>
                </div>
                <div className="d-flex flex-column">
                    <Usuario entries={stateGen} setEntries={setStateGen}/>                    
                    <div className="p-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="fecha-inicio">Fecha</span>
                            </div>
                            <input onChange={(e)=>handleChange(e,setStateGen,stateGen)} id='fecha' type="date" className="form-control" aria-label="Username" aria-describedby="fecha" />
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Hora</span>
                            </div>
                            <input id='hora' type="time" onChange={e => handleChange(e,setStateGen,stateGen)} className="form-control" aria-describedby="basic-addon3"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <button type='button' onClick={()=>onSubmit(stateGen,true)} className="btn btn-primary w-100" >Guardar</button>                        
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['worker']} listStP={stateGen}/>
                    <InputVarios conf={setStateGen} estado={stateGen} dato={2}/>
                </div>                
            </div>
        </>
    )
}

