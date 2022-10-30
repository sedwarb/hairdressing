import React from 'react'

function hour(){
    let horas=[],h
    for (let i = 5; i < 23; i++) {
        h = i.length===1?`0${i}:00`:`${i}:00`
        horas.push(h)
    }
    return horas
}

export function LHoras(){
    
    return(
        <>
            <ul className="list-group">
                {
                    hour().map(item=><li className="list-group-item">{item}</li>)
                }
            </ul>            
        </>
    )
}