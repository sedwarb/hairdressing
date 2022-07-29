import React, {useState} from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions"

export function ShowTable(){
    const [table,setTable] = useState("")
    return(
        <>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" onClick={()=>setTable("user")}>Usuario</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>setTable("worker")}>Trabajador</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={()=>setTable("service")}>Servicios</a>
                    </li>
                </ul>
            </div>
            <div>
                <Table typeTable={typeTable[table]} search={table}/>
            </div>
        </>
    )
}