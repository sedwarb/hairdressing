import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'
import Calendar from 'react-calendar'
import {
    onSubmit,
    stateGenCont,
    typeList,
    horaMinTurn,
    fechaAEnviar} from "../constAndFunctions/constAndFunions"
import 'react-calendar/dist/Calendar.css';

export function Entries(){
    const [stateGen,setStateGen] = useState(stateGenCont);
    
    function onChange(nextValue) {
        setStateGen({...stateGen,value:nextValue})
    }
    function handleChange(e){
        setStateGen({...stateGen,[e.target.id]:e.target.value})
    }
    return(
        <>            
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Datos de la Entrada</h4>
                <form onSubmit={e=>onSubmit(e,stateGen)} className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6 w-50 p-3">
                            <label htmlFor="telephone" className="form-label">Numero de Telefono</label>
                            <input onChange={e=>handleChange(e)} id="telephone" type="text" className="form-control" placeholder="" required/>
                            <div className="invalid-feedback">
                                Se requiere un Numero de telefono Valido.
                            </div>
                        </div>
                        <Lists typeList={typeList.service} listStP={stateGen.listSt}/>
                    </div> 
                    <div className="row g-3">
                        <div className="col-sm-6 w-100 p-3" >
                            <label className="form-label">Fecha...</label>
                            <label onClick={()=>stateGen.visible?setStateGen({...stateGen,visible:false}):setStateGen({...stateGen,visible:true})} className="form-label">{JSON.stringify(fechaAEnviar(stateGen))}</label>
                            <div className="invalid-feedback">
                                Se requiere una fecha valida.
                            </div>
                            <div></div>
                            {stateGen.visible?<Calendar onChange={onChange} value={stateGen.value}/>:<div></div>}                            
                        </div>                        
                        <div className="col-sm-6 w-50 p-3">
                            <label className="form-label" >Entrada</label>
                            <select className="form-label form-control" 
                            onChange={(e)=>setStateGen({...stateGen,entrada:e.currentTarget.value})}>
                                <option value="entry">Entrada Simple</option>
                                <option value="meeting">Cita</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-3">
                        <Lists typeList={typeList.worker} listStP={stateGen.listSt}/>
                        <div className="col-sm-6 w-50 p-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input onChange={e=>handleChange(e)} id="precio" type="text" className="form-control" placeholder="" required/>
                            <div className="invalid-feedback">
                                Se requiere un precio valido.
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-sm-6 w-50 p-3">
                            <label htmlFor="manual" className="form-label">Servicio Manual</label>
                            <input onChange={e=>handleChange(e)} id="manual" type="text" className="form-control" placeholder="" required/>
                            <div className="invalid-feedback">
                                Se requiere un Servicio valido.
                            </div>
                        </div>
                        <div className="col-sm-6 w-25 p-3">
                            <label className="form-label" >Hora</label>
                            <select className="form-label form-control" 
                            onChange={(e)=>setStateGen({...stateGen,hora:e.currentTarget.value})}>
                                {horaMinTurn.hora && horaMinTurn.hora.map(list=><option className="list-group-item" key={list} value={list}>{list}</option>)}
                            </select>
                            <select className="form-label form-control" 
                            onChange={(e)=>setStateGen({...stateGen,minutos:e.currentTarget.value})}>
                                {horaMinTurn.minutos && horaMinTurn.minutos.map(list=><option className="list-group-item" key={list} value={list}>{list}</option>)}
                            </select>
                            <select className="form-label form-control" 
                            onChange={(e)=>setStateGen({...stateGen,turno:e.currentTarget.value})}>
                                {horaMinTurn.turno && horaMinTurn.turno.map(list=><option className="list-group-item" key={list} value={list}>{list}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 w-100 p-3">-</div>
                    <button type='submit' className="w-100 btn btn-primary btn-lg" >Crear</button>
                                 
                </form>                
            </div>
        </>
    )
}