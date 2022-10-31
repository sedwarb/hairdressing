import React from 'react'

function hour(){
    let horas=[]
    for (let i = 5; i < 23; i++) {horas.push(i<=9?`0${i}:00`:`${i}:00`)}
    return horas
}

export function LHoras({datos}){
    
    return(
        <>
            <ul className="list-group">
                {
                    datos.citas?datos.citas.map((item,i)=>i>0?<li key={item} className="list-group-item">{`${new Date(item.date).getHours()}:${new Date(item.date).getMinutes()} - ${item.service.name} - ${item.user.fullname}`}</li>:<li></li>):
                    hour().map(item=><li key={item} className="list-group-item">{item}</li>)
                }
            </ul>
        </>
    )
}