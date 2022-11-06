import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'
import {typeList} from '../constAndFunctions/entries/typeList'
import {TablaTemporal} from '../TablaTemporal/TablaTemporal'
import {typeTable} from "../constAndFunctions/constAndFunions.js"
import {guardar} from '../constAndFunctions/entries/guardar'
import {tabla_st} from '../constAndFunctions/entries/usuario'
import { InputVarios } from './inputsEntries/InputVarios'
import {Usuario} from '../Usuario/Usuario'

export function Oentries(){
    const [entries,setEntries]=useState(tabla_st)
    const [tabla,setTabla]=useState([])
    const [css,setCss] = useState({mostrado:false,manual:false})
    return(
        <>
            <div className="d-flex flex-row justify-content-center"><h2>Registro de Servicios</h2></div>
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['service']} listStP={entries} />
                    <InputVarios conf={setEntries} estado={entries} nombre={"Servi. M."} iden={"manualEntry"}/>
                </div>
                <div className="d-flex flex-column">
                    <Usuario entries={entries} setEntries={setEntries} css={css} setCss={setCss}/>
                    <div className="p-2"><button onClick={()=>guardar(entries,setTabla,setEntries,tabla)} type='button' className="btn btn-primary w-100" hidden={css.mostrado} >Guardar</button></div>
                </div>
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['worker']} listStP={entries} />
                    <InputVarios conf={setEntries} estado={entries} nombre={"Precio. M."} iden={"amountEntry"}/>
                </div>
            </div>            
            <div className='mt-3 px-2' >                
                <TablaTemporal encabezado={typeTable.entries} dat={tabla} estilo={"table table-striped"}/>
            </div>
        </>
    )
}