import React, { useState,useEffect } from 'react'
//typeList
//typeL,fieldL,esp,listStP
export function Lists({typeList,listStP}){
    const [lists, setLists] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/${typeList.typeL}`)
        .then(r=>r.json())
        .then(resp=>setLists(resp))
        .catch(error=>console.log(`Error: ${error}`))
    },[typeList.typeL])
    return(
        <>            
            <div className="col-sm-6 w-50 p-3">
                <label className="form-label" >{`${typeList.esp}`}</label>
                <select className="form-label form-control" onChange={(e)=>listStP[`${typeList.typeL}Id`]=e.currentTarget.value}>
                    <option className="list-group-item">Seleccione...</option>
                    {lists && lists.map(list=><option className="list-group-item" key={list.id} value={list.id}>{list[typeList.fieldL]}</option>)}
                </select>
            </div>
            
        </>
    )
}