import React, {useState} from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export function ShowTable(){
    const [table,setTable] = useState({type:"",dbeg:"",dend:"",cdbeg:"",cdend:"",typed:"",send:false,tdate:""})
    function onChange(nextValue) {
        setTable({...table,cdbeg:nextValue,dbeg:nextValue.toDateString()})
        //console.log(`${nextValue.getFullYear()}/${nextValue.getMonth()}/${nextValue.getDate()}`)        
        //console.log(nextValue.toDateString())
    }
    function onChangef(nextValue) {
        setTable({...table,cdend:nextValue,dend:nextValue.toDateString()})
    }
    function boton() {
        if(table.dbeg!==""&& table.dend!==""&& table.typed!==""&& table.tdate!==""){
            setTable({...table,send:true})
        }
    }
    return(
        <>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={()=>setTable({...table,type:"user",dbeg:"",dend:"",cdbeg:"",cdend:"",typed:"",send:false,tdate:""})}>Usuario</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={()=>setTable({...table,type:"worker",dbeg:"",dend:"",cdbeg:"",cdend:"",typed:"",send:false,tdate:""})}>Trabajador</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={()=>setTable({...table,type:"service",dbeg:"",dend:"",cdbeg:"",cdend:"",typed:"",send:false,tdate:""})}>Servicios</button>
                    </li>
                    <li className="nav-item">
                        <p>                            
                            <button onClick={boton} className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1">
                                Entradas
                            </button>
                        </p>
                        <div className="row">
                            <div className="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body">
                                        <p>                                            
                                            <div className="input-group mb-3" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon3">F. Inicio</span>
                                                </div>
                                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={table.dbeg}/>
                                            </div>
                                        </p>
                                        <div className="collapse" id="collapseExample">
                                            <div className="card card-body">
                                                <Calendar onChange={onChange} value={table.cdbeg} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                    <div class="card card-body">
                                        <p>
                                            <div className="input-group mb-3" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon3">F. Fin</span>
                                                </div>
                                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={table.dend}/>
                                            </div>
                                        </p>
                                        <div className="collapse" id="collapseExample2">
                                            <div className="card card-body">
                                                <Calendar onChange={onChangef} value={table.cdend} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="collapse multi-collapse" id="multiCollapseExample3">
                                    <div className="card card-body">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon3">Tipo</span>
                                            </div>
                                            <input onChange={(e) => setTable({ ...table, typed: e.target.value })} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="collapse multi-collapse" id="multiCollapseExample4">
                                    <div className="card card-body">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon3">Filtro</span>
                                            </div>
                                            <input onChange={(e) => setTable({ ...table, tdate: e.target.value })} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                        </div>
                                        {/*<button className="btn btn-primary" onClick={() => table.send ? setTable({ ...table, send: false, type: "" }) : setTable({ ...table, send: true, type: "" })}>Servicios</button>*/}
                                    </div>
                                </div>
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