import React from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions.js"

export function TablaTrabaja(){
    return (
        <>
            <h1>Trabajadores</h1>
            <Table typeTable={typeTable["worker"]} search={{type:"worker"}}/>
        </>
    )
}