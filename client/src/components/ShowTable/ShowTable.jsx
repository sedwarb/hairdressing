import React, {useState} from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions"

export function ShowTable(){
    const [table,setTable] = useState({type:"",dbeg:"",dend:"",typed:"",send:false,tdate:""})
    return(
        <>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={()=>setTable({...table,type:"user"})}>Usuario</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={()=>setTable({...table,type:"worker"})}>Trabajador</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={()=>setTable({...table,type:"service"})}>Servicios</button>
                    </li>
                    <li className="nav-item">
                        <p>
                            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Entradas
                            </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body d-flex flex-row">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">F. Inicio</span>
                                    </div>
                                    <input onChange={(e)=>setTable({...table,dbeg:e.target.value})} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">F. Fin</span>
                                    </div>
                                    <input onChange={(e)=>setTable({...table,dend:e.target.value})} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">Tipo</span>
                                    </div>
                                    <input onChange={(e)=>setTable({...table,typed:e.target.value})} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">Filtro</span>
                                    </div>
                                    <input onChange={(e)=>setTable({...table,tdate:e.target.value})} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                </div>
                                <button className="btn btn-primary" onClick={()=>table.send ? setTable({...table,send:false,type:""}) : setTable({...table,send:true,type:""})}>Servicios</button>
                            </div>
                        </div>
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