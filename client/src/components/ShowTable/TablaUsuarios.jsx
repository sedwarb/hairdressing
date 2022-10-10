import React from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions.js"

export function TablaUsuario(){
    return (
        <>
            <h1>Usuarios</h1>
            <Table typeTable={typeTable["user"]} search={{type:"user"}}/>
        </>
    )
}