import React from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions.js"

export function TablaTrabaja(){
    return (
        <>
            <div className="d-flex flex-row justify-content-center"><h1>Trabajadores</h1></div>
            <div className='mt-3 px-2'><Table typeTable={typeTable["worker"]} search={{type:"worker"}}/></div>
        </>
    )
}