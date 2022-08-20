import React, { useState,useEffect } from 'react'
import {DB_HOST} from '../constAndFunctions/constAndFunions'

export function Lists({typeList,listStP}){
    const [lists, setLists] = useState([]);
    useEffect(()=>{
        fetch(`http://${DB_HOST}:3001/${typeList.typeL}`)
        .then(r=>r.json())
        .then(resp=>setLists(resp))
        .catch(error=>console.log(`Error: ${error}`))
    },[typeList.typeL])
    return(
        <>            
            <div className="col-sm-6 w-50 p-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">{`${typeList.esp}`}</span>                                    
                    </div>
                    <select className="form-label form-control" onChange={(e) => listStP[`${typeList.typeL}Id`] = e.currentTarget.value}>
                        <option className="list-group-item">Seleccione...</option>
                        {lists && lists.map(list => <option className="list-group-item" key={list.id} value={list.id}>{list[typeList.fieldL]}</option>)}
                    </select>
                </div>
            </div>
        </>
    )
}