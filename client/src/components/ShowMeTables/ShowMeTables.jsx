import React,{useState} from 'react'
import {Table} from '../Table/Table'
import {typeTable,stateTable} from "../constAndFunctions/constAndFunions.js"
import { InputGen } from './inputsTables/inputGen'

export function ShowMeTables(){
    const [table,setTable] = useState(stateTable)
    return(
        <>
            <h2 className="text-center font-weight-bold my-3">Reporte por Rango de Fecha</h2>
            <div className="row px-2 mt-2">
                <InputGen 
                    conf={setTable} 
                    estado={table} 
                    nombre={"F. Inicio"} 
                    iden={"dbeg"} 
                    tipo={"date"}
                />                
                <InputGen 
                    conf={setTable} 
                    estado={table} 
                    nombre={"F. Fin"} 
                    iden={"dend"} 
                    tipo={"date"}
                />
                <InputGen 
                    conf={setTable} 
                    estado={table} 
                    nombre={"Tipo"}
                />
                <InputGen 
                    conf={setTable} 
                    estado={table} 
                    nombre={"Filtro"} 
                    iden={"tdate"} 
                    tipo={"text"}
                />
            </div>
            <div className='row my-1'>
                <button 
                    onClick={()=>setTable({...table,type:"",send:true})} 
                    className="mx-auto btn btn-primary btn-lg">
                    Enviar
                </button>
            </div>
            <div className='mt-3 px-2' >                
                <Table typeTable={typeTable.entries} search={table}/>
            </div>
        </>
    )

}