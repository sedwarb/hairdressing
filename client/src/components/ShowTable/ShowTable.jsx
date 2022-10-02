import React, {useState} from 'react'
import {Table} from '../Table/Table'
import {typeTable,stateTable,cleanTableF} from "../constAndFunctions/constAndFunions.js"

export function ShowTable(){
    const [table,setTable] = useState(stateTable)
    function showTableNow(e){
        if(e.target.id==="user")setTable(cleanTableF(table).user)
        if(e.target.id==="worker")setTable(cleanTableF(table).worker)
        if(e.target.id==="service")setTable(cleanTableF(table).service)
    }
    return(
        <>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <button disabled={table.user} id="user" className="btn btn-primary" onClick={e=>showTableNow(e)}>Usuario</button>
                    </li>
                    <li className="nav-item">
                        <button disabled={table.worker} id="worker" className="btn btn-primary" onClick={e=>showTableNow(e)}>Trabajador</button>
                    </li>
                    <li className="nav-item">
                        <button disabled={table.service} id="service" className="btn btn-primary" onClick={e=>showTableNow(e)}>Servicios</button>
                    </li>
                </ul>
            </div>
            <div>
                {table.type ? <Table typeTable={typeTable[table.type]} search={table}/> : <div></div>}
                {table.send ? <Table typeTable={typeTable.entries} search={table}/> : <div></div>}
            </div>
        </>
    )
}