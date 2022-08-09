import React,{useEffect,useState} from 'react'
import image from "../../img/gen.jpg"
import {constrPosition} from "../constAndFunctions/constAndFunions"

export function BotonesEntries(){
    const [lists, setLists] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3001/service`)
        .then(r=>r.json())
        .then(resp=>{
            setLists(constrPosition(resp))            
        })
        .catch(error=>console.log(`Error: ${error}`))
    },[])
    return(
        <>
            {lists && lists.map((pos,i) => {
                return (
                    <div className="row" key={i}>
                        {pos && pos.map(item => {
                            return (
                                <div className="col" key={item.id}>
                                    <div className="row">
                                        <img onClick={e=>console.log(e.target.id)} id={item.id} src={image} className="img-thumbnail" alt="Img" />
                                    </div>
                                    <div className="row">
                                        <label className="form-label">{item.name}</label>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                )
            })}
        </>
    )
}