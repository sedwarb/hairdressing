import React,{useState} from 'react'
import {typeTable,stateTable} from "../constAndFunctions/constAndFunions.js"
import { InputGen } from '../ShowMeTables/inputsTables/inputGen'
import { TableF } from './TableF/TableF'

export function Facturar(){
    const [table,setTable] = useState(stateTable)
    return(
        <>
            <h2 className="text-center font-weight-bold my-3">Facturar</h2>
            <div className=" d-flex flex-row justify-content-center">
                <div className="flex-column">
                    <InputGen 
                        conf={setTable} 
                        estado={table} 
                        nombre={"Fecha"} 
                        iden={"dbeg"} 
                        tipo={"date"}
                    />
                </div>
                <div className="flex-column">
                    <InputGen 
                        conf={setTable} 
                        estado={table} 
                        nombre={"Id Cliente"} 
                        iden={"tdate"} 
                        tipo={"text"}
                    />
                </div>
                <div className="flex-column">
                    <button 
                        onClick={()=>setTable({...table,type:"",send:true,tdate:"phoneNumber"})} 
                        className="btn btn-primary">
                        Enviar
                    </button>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-center' >
                <div className="flex-column p-2"><TableF typeTable={typeTable.facturar} search={table} conf={setTable}/></div>
                <div className="flex-column p-2">
                    <div>Productos por Entrada</div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID Entrada</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Und</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>5</td>
                                <td>Tintes</td>
                                <td>0.5</td>
                                <td>ltrs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}