import React, { useState,useEffect } from 'react'

export function Lists({typeL,fieldL,esp,listStP}){
    const [lists, setLists] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/${typeL}`)
        .then(r=>r.json())
        .then(resp=>setLists(resp))
        .catch(error=>console.log(`Error: ${error}`))
    },[typeL])
    return(
        <>            
            <div className="col-sm-6" class="w-50 p-3">
                <label className="form-label" >{`${esp}`}</label>
                <select className="form-label form-control" onChange={(e)=>listStP[`${typeL}Id`]=e.currentTarget.value}>
                    <option className="list-group-item">Seleccione...</option>
                    {lists && lists.map(list=><option className="list-group-item" key={list.id} value={list.id}>{list[fieldL]}</option>)}
                </select>
            </div>
            
        </>
    )
}