import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export function Entries(){
    const [listSt] = useState({workerId:"",serviceId:""})
    const [value, setValue] = useState(new Date());
    const [visible,setVisible] = useState(false);
    function onChange(nextValue) {
        setValue(nextValue);
    }
    return(
        <>            
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Datos de la Entrada</h4>
                <form className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6" class="w-50 p-3">
                            <label htmlFor="telephone" className="form-label">Numero de Telefono</label>
                            <input type="text" className="form-control" id="telephone" placeholder="" required/>
                            <div className="invalid-feedback">
                                Se requiere un Numero de telefono Valido.
                            </div>
                        </div>
                        <div className="col-sm-6" class="w-50 p-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input type="text" className="form-control" id="precio" placeholder="" required/>
                            <div className="invalid-feedback">
                                Se requiere un precio valido.
                            </div>
                        </div>
                        <div className="col-sm-6" class="w-100 p-3">
                            <label className="form-label">Fecha</label>
                            <label onClick={()=>visible?setVisible(false):setVisible(true)} className="form-label">{JSON.stringify(value)}</label>
                            <div className="invalid-feedback">
                                Se requiere una fecha valida.
                            </div>
                            <div></div>
                            {visible?<Calendar onChange={onChange} value={value}/>:<div></div>}                            
                        </div>                        
                        <div className="col-sm-6" class="w-50 p-3">
                            <label className="form-label" >Entrada</label>
                            <select className="form-label" class="form-control">
                                <option defaultValue="entry">Entrada Simple</option>
                                <option defaultValue="meeting">Cita</option>
                            </select>
                        </div>
                        <Lists typeL="worker" fieldL="fullname" 
                        esp="Trabajadores" listStP={listSt}/>
                        <Lists typeL="service" fieldL="name"
                        esp="Servicios" listStP={listSt}/>
                    </div>                    
                </form>                
            </div>
        </>
    )
}