import React from 'react'

function hour(){
    let horas=[]
    for (let i = 5; i < 23; i++) {horas.push(i<=9?`0${i}:00`:`${i}:00`)}
    return horas
}

export function LHoras(){
    
    return(
        <>
            <ul className="list-group">
                {
                    hour().map(item=><li key={item} className="list-group-item">{item}</li>)
                }
            </ul>            
        </>
    )
}