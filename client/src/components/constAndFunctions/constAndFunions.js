export const DB_HOST='localhost'
export async function getDatos(search){
    let datos

    if(search.type!==""){
        datos = await fetch(`http://${DB_HOST}:3001/${search.type}`)
    }else if(search.send){
        const valor_fin = search.dend.length===0?search.dbeg:search.dend
        datos = await fetch(`http://${DB_HOST}:3001/entries?dateIni=${search.dbeg}&&dateEnd=${valor_fin}${search.typed==="entry"?" 23:59:59":""}&&${search.typed}=${search.typed==="entry"?"meeting":search.tdate}`)
        search.send=false
    }
    return datos ? datos.json():[]
}

export const typeTable = {
    user:[{str:"Numero de Telefono",name:"phoneNumber",sname:null},
    {str:"Nombre",name:"fullname",sname:null}],
    service:[{str:"Id",name:"id",sname:null},
    {str:"Servicio",name:"name",sname:null},
    {str:"Precio",name:"amount",sname:null},
    {str:"Informacion",name:"info",sname:null}],
    worker:[{str:"Id",name:"id",sname:null},
    {str:"Nombre",name:"fullname",sname:null}],
    entries:[{str:"Fecha",name:"date",sname:null},
    {str:"Manual",name:"manualEntry",sname:null},
    {str:"Monto",name:"amountEntry",sname:null},
    {str:"Cliente",name:"user",sname:"fullname"},
    {str:"Trabajador",name:"worker",sname:"fullname"},
    {str:"Servicio",name:"service",sname:"name"}],
    products:[{str:"Linea",name:"linea",sname:null},
    {str:"Marca",name:"marca",sname:null},
    {str:"Tipo",name:"tipo",sname:null},
    {str:"Nombre",name:"nombre",sname:null},
    {str:"Volumen",name:"volumen",sname:null},
    {str:"Unidad",name:"unidad",sname:null},
    {str:"Existencia",name:"existencia",sname:null},
    {str:"Descripcion",name:"descripcion",sname:null}]
}

export const stateTable = {
    type:"",
    dbeg:"",
    dend:"",
    cdbeg:new Date(),
    cdend:new Date(),
    typed:"",
    send:false,
    tdate:"",
    firstTime:false,
    user:false,
    worker:false,
    service:false
}

export const tableFilter = [{str:"workerId",name:"Id Trabajador"},
{str:"phoneNumber",name:"Id Usuario"},
{str:"entry",name:"Citas"}]