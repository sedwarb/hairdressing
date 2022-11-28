import React from 'react'
import {Table} from '../Table/Table'
import {typeTable} from "../constAndFunctions/constAndFunions.js"

export function TablaProductos(){
    return(
        <>
            <div className="d-flex flex-row justify-content-center"><h1>Productos</h1></div>
            <div className='mt-3 px-2'>
                <Table typeTable={typeTable["products"]} search={{type:"product"}}/>
            </div>
        </>
    )
}