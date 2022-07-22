import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export function Entries(){
    const [listSt] = useState({workerId:"",serviceId:""})
    const [value, setValue] = useState(new Date());    
    const [visible,setVisible] = useState(false);
    const [entrada,setEntrada] = useState("entry");
    const [stateGen,setStateGen] = useState({});
    function onChange(nextValue) {
        setValue(nextValue);
    }
    function handleChange(e){
        setStateGen({...stateGen,[e.target.id]:e.target.value})
      }
    function onSubmit(e) {
        e.preventDefault();
        const options = {method: "POST",headers:{"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                entryType:entrada,
                date:value,
                serviceId:listSt.serviceId,
                workerId:listSt.workerId,
                userPhoneNumber:stateGen.telephone?stateGen.telephone:"3006007050",
                manualEntry:listSt.serviceId==="inma"?stateGen.manual:"",
                amountEntry:listSt.serviceId==="inma"?parseFloat(stateGen.precio):0
            }
        
        )};
        fetch(`http://localhost:3001/entries`,options)
        .then(response => response.json())
        .catch(error =>console.log(`Este fue el Error: ${error}`))
    }
    return(
        <>            
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Datos de la Entrada</h4>
                <form onSubmit={e=>onSubmit(e)} className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6 w-50 p-3">
                            <label htmlFor="telephone" className="form-label">Numero de Telefono</label>
                            <input onChange={e=>handleChange(e)} id="telephone" type="text" className="form-control" placeholder="" required/>
                            <div className="invalid-feedback">
                                Se requiere un Numero de telefono Valido.
                            </div>
                        </div>
                        <Lists typeL="service" fieldL="name"
                        esp="Servicios" listStP={listSt}/>                        
                        <div className="col-sm-6 w-100 p-3" >
                            <label className="form-label">Fecha</label>
                            <label onClick={()=>visible?setVisible(false):setVisible(true)} className="form-label">{JSON.stringify(value)}</label>
                            <div className="invalid-feedback">
                                Se requiere una fecha valida.
                            </div>
                            <div></div>
                            {visible?<Calendar onChange={onChange} value={value}/>:<div></div>}                            
                        </div>                        
                        <div className="col-sm-6 w-50 p-3">
                            <label className="form-label" >Entrada</label>
                            <select className="form-label form-control" 
                            onChange={(e)=>setEntrada(e.currentTarget.value)}>
                                <option value="entry">Entrada Simple</option>
                                <option value="meeting">Cita</option>
                            </select>
                        </div>
                        <Lists typeL="worker" fieldL="fullname" 
                        esp="Trabajadores" listStP={listSt}/>
                        <div className="col-sm-6 w-50 p-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input onChange={e=>handleChange(e)} id="precio" type="text" className="form-control" placeholder="" required/>
                            <div className="invalid-feedback">
                                Se requiere un precio valido.
                            </div>
                        </div>
                        <div className="col-sm-6 w-50 p-3">
                            <label htmlFor="manual" className="form-label">Servicio Manual</label>
                            <input onChange={e=>handleChange(e)} id="manual" type="text" className="form-control" placeholder="" required/>
                            <div className="invalid-feedback">
                                Se requiere un Servicio valido.
                            </div>
                        </div>
                        <div className="col-sm-6 w-100 p-3">-</div>
                        <button type='submit' className="w-100 btn btn-primary btn-lg" >Crear</button>
                    </div>                    
                </form>                
            </div>
        </>
    )
}