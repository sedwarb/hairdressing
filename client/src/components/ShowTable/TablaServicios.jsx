import React from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions.js"

export function TablaServicios(){
    return (
        <>
            <h1>Servicios</h1>
            <Table typeTable={typeTable["service"]} search={{type:"service"}}/>
        </>
    )
}