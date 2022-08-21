import React, {useState} from 'react'
import {Table} from '../Table/Table'
import {typeTable,stateTable,cleanTableF,tableFilter} from "../constAndFunctions/constAndFunions.js"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export function ShowTable(){
    const [table,setTable] = useState(stateTable)
    function onChange(nextValue) {
        setTable({...table,cdbeg:nextValue,dbeg:nextValue.toDateString()})
    }
    function onChangef(nextValue) {
        setTable({...table,cdend:nextValue,dend:nextValue.toDateString()})
    }
    function boton() {
        if(table.dbeg!==""&& table.dend!=="" && table.firstTime!==true){
            setTable({
                ...table,send:true,
                firstTime:true,
                user:false,
                worker:false,
                service:false
            })
        }else{
            setTable({...table,type:"",send:false})
        }
    }
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
                    <li className="nav-item">
                        <p>
                            <button onClick={boton} className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseEntradas" aria-expanded="false" aria-controls="collapseExample">
                                Entradas
                            </button>
                        </p>
                        <div className="collapse" id="collapseEntradas">
                            <div className="row">
                                <div className="col">
                                    <div className="input-group mb-3" data-toggle="collapse" data-target="#collapseCal1" aria-expanded="false" aria-controls="collapseExample">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3">F. Inicio</span>
                                        </div>
                                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={table.dbeg} />
                                    </div>
                                    <div className="collapse" id="collapseCal1">
                                        <div className="card card-body">
                                            <Calendar onChange={onChange} value={table.cdbeg} />                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-3" data-toggle="collapse" data-target="#collapseCal2" aria-expanded="false" aria-controls="collapseExample2">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3">F. Fin</span>
                                        </div>
                                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder={table.dend} />
                                    </div>
                                    <div className="collapse" id="collapseCal2">
                                        <div className="card card-body">
                                            <Calendar onChange={onChangef} value={table.cdend} />                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3">Tipo</span>
                                        </div>
                                        <select className="form-label form-control" onChange={(e) => setTable({ ...table, typed: e.currentTarget.value })}>
                                            <option className="list-group-item">...Seleccione</option>
                                            {tableFilter && tableFilter.map(date => <option className="list-group-item" key={date.str} value={date.str}>{date.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3">Filtro</span>
                                        </div>
                                        <input onChange={(e) => setTable({ ...table, tdate: e.target.value })} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
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