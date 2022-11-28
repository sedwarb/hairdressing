import React from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions.js"

export function TablaUsuario(){
    return (
        <>
            <div className="d-flex flex-row justify-content-center"><h1>Clientes</h1></div>
            <div className='mt-3 px-2'>
                <Table typeTable={typeTable["user"]} search={{type:"user"}}/>
            </div>
        </>
    )
}