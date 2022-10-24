
import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'
import {onSubmit} from '../constAndFunctions/entries/onSubmit'
import {tabla_st} from '../constAndFunctions/entries/usuario'
import {typeList} from '../constAndFunctions/entries/typeList'
import { InputVarios } from './inputsEntries/InputVarios'
import {Usuario} from '../Usuario/Usuario'
import { CitasInput } from './inputsEntries/CitasInput'

export function Entries(){
    const [stateGen,setStateGen] = useState(tabla_st)
    return(
        <>
            <div className="d-flex flex-row justify-content-center"><h2>Registro de Citas</h2></div>
            <div className="d-flex flex-row justify-content-center">                
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['service']} listStP={stateGen}/>
                    <InputVarios conf={setStateGen} estado={stateGen} nombre={"Servi. M."} iden={"manualEntry"}/>
                </div>
                <div className="d-flex flex-column">
                    <Usuario entries={stateGen} setEntries={setStateGen}/>
                    <CitasInput setStateGen={setStateGen} stateGen={stateGen} nombre={"Fecha"} iden={"fecha"} tipo={"date"} />
                    <CitasInput setStateGen={setStateGen} stateGen={stateGen} nombre={"Hora"} iden={"hora"} tipo={"time"} />
                    <div className="p-2">
                        <button type='button' onClick={()=>onSubmit(stateGen,true)} className="btn btn-primary w-100" >Guardar</button>                        
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['worker']} listStP={stateGen}/>
                    <InputVarios conf={setStateGen} estado={stateGen} nombre={"Precio. M."} iden={"amountEntry"}/>
                </div>                
            </div>
        </>
    )
}

