import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'

export function Entries(){
    const [listSt] = useState({workerId:"",serviceId:""})
    return(
        <>            
            <div>Telefono del Usuario</div>
            <input type='search'/>
            <div>Fecha</div>
            <input type='search'/>
            <div><Lists typeL="worker" fieldL="fullname" esp="Trabajadores" listStP={listSt}/></div>
            <div><Lists typeL="service" fieldL="name" esp="Servicios" listStP={listSt}/></div>
            <div>Precio</div>
            <input type='search'/>
            <div>Entrada</div>
            <select>
                <option value="entry">Entrada Simple</option>
                <option value="meeting">Cita</option>
            </select>            
        </>
    )
}