import React from 'react'
import { capitalizar } from './../constAndFunctions/varios_usos/capitalizar'
import { formato_tiempo } from './../constAndFunctions/varios_usos/formato_tiempo'
import { horas } from './../constAndFunctions/citas/horas'

export function LHoras({datos}){    
    return(        
        <ul className="list-group">
            {
                datos.citas?
                    datos.citas.sort((a,b)=>formato_tiempo("hora",a.date)-formato_tiempo("hora",b.date))
                    .map(
                        (item,i)=>{
                            return i>0?
                                <li key={item.date} className="list-group-item">
                                    <strong>
                                        <span>{`${formato_tiempo("hora",item.date)}:`}</span>
                                        <span>{`${formato_tiempo("",item.date)}`}</span>
                                    </strong>
                                    <span>{' - '}</span>
                                    <strong>
                                        <span>{`${capitalizar(item.service.name)}`}</span>
                                    </strong>
                                    <span>{' - '}</span>
                                    <span>{`${capitalizar(item.user.fullname)}`}</span>
                                </li>:<li key={i}></li>
                        }
                    ):
                horas().map(item=><li key={item} className="list-group-item">{item}</li>)
            }
        </ul>        
    )
}