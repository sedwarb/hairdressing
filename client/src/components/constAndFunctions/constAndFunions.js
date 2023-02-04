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

export const pathU = {
    user:"11711511797114105111",
    admin:"971171161011101161059997114",
    entradas:"69110116114105101115",
    citas:"109101101116105110103",
    reportes:"849798108101",
    facturar:"102979911611711497114",
    usuarios:"85115101114849798108101",
    servicios:"8310111411810599101849798108101",
    trabajador:"87111114107101114849798108101",
    productos:"11211411110011799116111115"
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
    {str:"Descripcion",name:"descripcion",sname:null}],
    facturar:[{str:"ID",name:"id",sname:null},
    {str:"Manual",name:"manualEntry",sname:null},
    {str:"Monto",name:"amountEntry",sname:null},
    {str:"Trabajador",name:"worker",sname:"fullname"},
    {str:"Servicio",name:"service",sname:"name"}],
    producEntries:[{str:"nombre",name:"nombre",sname:null},
    {str:"cantidad",name:"cantidad",sname:null},
    {str:"IdEntrada",name:"entryId",sname:null}]
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

/*
export function cleanTableF(table){
    return {
            user:
            {
                ...table,
                type:"user",
                user:true,
                worker:false,
                service:false,
                dbeg:"",
                dend:"",
                cdbeg:"",
                cdend:"",
                typed:"",
                send:false,
                tdate:"",
                firstTime:false
            },
            worker:
            {
                ...table,
                type:"worker",
                worker:true,
                user:false,
                service:false,
                dbeg:"",
                dend:"",
                cdbeg:"",
                cdend:"",
                typed:"",
                send:false,
                tdate:"",
                firstTime:false
            },
            service:
            {
                ...table,
                type:"service",
                service:true,
                user:false,
                worker:false,
                dbeg:"",
                dend:"",
                cdbeg:"",
                cdend:"",
                typed:"",
                send:false,
                tdate:"",
                firstTime:false
            }
    }
}
*/