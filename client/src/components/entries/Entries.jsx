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
    //stateGen["listStP"]?stateGen["listStP"]["serviceId"]?stateGen["listStP"]["serviceId"]==="inma"?true:false:true:true
    return(
        <>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Datos de la Entrada</h4>
                <form onSubmit={e=>onSubmit(e,stateGen)} className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6 w-50 p-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">Numero/Telefono</span>
                                </div>
                                <input onChange={e=>handleChange(e)} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                            </div>
                        </div>
                        <Lists typeList={typeList.service} listStP={stateGen.listSt}/>
                    </div>
                    <div className="row g-3">
                        <div className="col-sm-6 w-50 p-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">Entrada</span>
                                </div>
                                <select className="form-label form-control" 
                                    onChange={(e)=>setStateGen({...stateGen,entrada:e.currentTarget.value})}>
                                    <option value="entry" className="list-group-item">Entrada Simple</option>
                                    <option className="list-group-item" value="meeting">Cita</option>
                                </select>
                            </div>
                        </div>
                        <Lists typeList={typeList.worker} listStP={stateGen.listSt}/>
                    </div>
                    <div className="row g-3" hidden={stateGen["listSt"]["serviceId"]==="inma"?false:true}>
                        <div className="col-sm-6 w-50 p-3" >
                            <div className="input-group mb-3">
                                <div className="input-group-prepend" onClick={()=>stateGen.visible?setStateGen({...stateGen,visible:false}):setStateGen({...stateGen,visible:true})}>
                                    <span className="input-group-text" id="basic-addon3">Fecha</span>
                                    <input id="manual" type="text" className="form-control" aria-describedby="basic-addon3" placeholder={JSON.stringify(fechaAEnviar(stateGen))} />
                                </div>
                                {stateGen.visible?<Calendar onChange={onChange} value={stateGen.value}/>:<span></span>}
                            </div>                            
                        </div>
                        <div className="col-sm-6 w-50 p-3">
                            <div className="row g-3 p-3">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">Hora</span>
                                    </div>
                                    <select 
                                        onChange={(e)=>setStateGen({...stateGen,hora:e.currentTarget.value})}>
                                        {horaMinTurn.hora && horaMinTurn.hora.map(list=><option className="list-group-item" key={list} value={list}>{list}</option>)}
                                    </select>
                                    <select 
                                        onChange={(e)=>setStateGen({...stateGen,minutos:e.currentTarget.value})}>
                                        {horaMinTurn.minutos && horaMinTurn.minutos.map(list=><option className="list-group-item" key={list} value={list}>{list}</option>)}
                                    </select>
                                    <select 
                                        onChange={(e)=>setStateGen({...stateGen,turno:e.currentTarget.value})}>
                                        {horaMinTurn.turno && horaMinTurn.turno.map(list=><option className="list-group-item" key={list} value={list}>{list}</option>)}
                                    </select>
                                </div>                                
                            </div>                            
                        </div>
                    </div>
                    <div className="row g-3" hidden={stateGen.entrada==="meeting"?false:true}>
                        <div className="col-sm-6 w-50 p-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">Servicio M.</span>
                                </div>
                                <input onChange={e=>handleChange(e)} id="manual" type="text" className="form-control" aria-describedby="basic-addon3" />
                            </div>
                        </div>
                        <div className="col-sm-6 w-50 p-3">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">Precio M.</span>
                                </div>
                                <input onChange={e=>handleChange(e)} id="precio" type="text" className="form-control" aria-describedby="basic-addon3" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 w-100 p-3">-</div>
                    <button type='submit' className="w-100 btn btn-primary btn-lg" >Crear</button>
                </form>
            </div>
        </>
    )
}