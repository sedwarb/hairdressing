import React from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions"
//uso temporal "user","worker","service"
const muestra = "service"

export function ShowTable(){
    return(
        <>
            <Table typeTable={typeTable[muestra]} search={muestra}/>
        </>
    )
}