import React,{useState} from 'react'
import {Table} from '../Table/Table'
import {typeTable,stateTable,tableFilter} from "../constAndFunctions/constAndFunions.js"

export function ShowMeTables(){
    const [table,setTable] = useState(stateTable)
    function handleChange(e){
        setTable({...table,[e.target.id]:e.target.value})
    }
    return(
        <>
            <h2 className="text-center font-weight-bold my-3">Reporte por Rango de Fecha</h2>
            <div className="row px-2 mt-2">
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="fecha-inicio">F. Inicio</span>
                        </div>
                        <input onChange={(e)=>handleChange(e)} id='dbeg' type="date" className="form-control" aria-label="Username" aria-describedby="fecha-inicio" />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="fecha-fin">F. Fin</span>
                        </div>
                        <input onChange={(e)=>handleChange(e)} id='dend' type="date" className="form-control" aria-label="Username" aria-describedby="fecha-fin" />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="tipo">Tipo</span>
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
                            <span className="input-group-text" id="filtro">Filtro</span>
                        </div>
                        <input id='tdate' onChange={(e) => handleChange(e)} type="text" className="form-control" aria-label="Username" aria-describedby="filtro" />
                    </div>
                </div>
            </div>
            <div className='row my-1'>
                <button onClick={()=>setTable({...table,type:"",send:true})} className="mx-auto btn btn-primary btn-lg" >Enviar</button>
            </div>
            <div className='mt-3 px-2' >                
                <Table typeTable={typeTable.entries} search={table}/>
            </div>
        </>
    )

}