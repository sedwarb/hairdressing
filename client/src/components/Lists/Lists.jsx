import React, { useState,useEffect } from 'react'

export function Lists({typeL,fieldL,esp}){
    const [lists, setLists] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/${typeL}`)
        .then(r=>r.json())
        .then(resp=>setLists(resp))
        .catch(error=>console.log(`Error: ${error}`))
    },[typeL])
    
    return(
        <>
            <div>{`${esp}`}</div>
            <select>
                {lists && lists.map(list=><option value={list.id}>{list[fieldL]}</option>)}
            </select>
        </>
    )
}