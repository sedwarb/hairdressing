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
            <div className="d-flex flex-row justify-content-center">
                <Usuario entries={entries} setEntries={setEntries} css={css} setCss={setCss}/>
            </div>
            <div className="d-flex flex-row justify-content-center">                
                <Lists typeList={typeList['service']} listStP={entries} />
                <Lists typeList={typeList['worker']} listStP={entries} />
            </div>
            <div className="d-flex flex-row justify-content-center">
                <InputVarios conf={setEntries} tipo={"text"} estado={entries} nombre={"Servicio"} iden={"manualEntry"}/>
                <InputVarios conf={setEntries} tipo={"number"} estado={entries} nombre={"Precio"} iden={"amountEntry"}/>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className="p-2"><button onClick={()=>guardar(entries,setTabla,setEntries,tabla)} type='button' className="btn btn-outline-primary btn-lg" hidden={css.mostrado} >Guardar</button></div>
            </div>
            <div className='mt-3 px-2' >                
                <TablaTemporal state={entries} encabezado={typeTable.entries} dat={tabla} estilo={"table table-striped"}/>
            </div>
        </>
    )
}