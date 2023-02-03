import React,{useState} from 'react'
import {typeTable,stateTable} from "../constAndFunctions/constAndFunions.js"
import { InputGen } from '../ShowMeTables/inputsTables/inputGen'
import { TableF } from './TableF/TableF'

export function Facturar(){
    const [table,setTable] = useState(stateTable)
    return(
        <>
            <h2 className="text-center font-weight-bold my-3">Facturar</h2>
            <div className="row px-2 mt-2">
                <InputGen 
                    conf={setTable} 
                    estado={table} 
                    nombre={"Fecha"} 
                    iden={"dbeg"} 
                    tipo={"date"}
                />
                <InputGen 
                    conf={setTable} 
                    estado={table} 
                    nombre={"Id Cliente"} 
                    iden={"tdate"} 
                    tipo={"text"}
                />
            </div>
            <div className='row my-1'>
                <button 
                    onClick={()=>setTable({...table,type:"",send:true,tdate:"phoneNumber"})} 
                    className="mx-auto btn btn-primary btn-lg">
                    Enviar
                </button>
            </div>
            <div className='mt-3 px-2' >                
                <TableF typeTable={typeTable.facturar} search={table} conf={setTable}/>
            </div>
        </>
    )

}