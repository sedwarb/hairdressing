import React from 'react'

function hour(){
    let horas=[]
    for (let i = 5; i < 23; i++) {horas.push(i<=9?`0${i}:00`:`${i}:00`)}
    return horas
}
function tiempo(desicion,dato){
    let ndato = new Date(dato)
    if(desicion==="hora") return ndato.getHours()<10?`0${ndato.getHours()}`:ndato.getHours()
    else return ndato.getMinutes()<10?`${ndato.getMinutes()}0`:ndato.getMinutes()
}

export function LHoras({datos}){
    
    return(
        <>
            <ul className="list-group">
                {
                    datos.citas?datos.citas.sort((a,b)=>tiempo("hora",a.date)-tiempo("hora",b.date))
                        .map(
                            (item,i)=>{
                                return i>0?
                                    <li key={`${item.service.name}${i}`} className="list-group-item">
                                        <strong>
                                            <span>{`${tiempo("hora",item.date)}:`}</span>
                                            <span>{`${tiempo("",item.date)}`}</span>
                                        </strong>
                                        <span>{' - '}</span>
                                        <strong>
                                            <span>{`${item.service.name.toString().replace(/^\w/, c => c.toUpperCase())}`}</span>
                                        </strong>
                                        <span>{' - '}</span>
                                        <span>{`${item.user.fullname.toString().replace(/^\w/, c => c.toUpperCase())}`}</span>
                                    </li>:<li></li>
                            }
                        ):
                    hour().map(item=><li key={item} className="list-group-item">{item}</li>)
                }
            </ul>
        </>
    )
}