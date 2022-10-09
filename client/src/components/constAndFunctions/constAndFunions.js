export const DB_HOST='localhost'
export async function getDatos(search){
    let datos
    if(search.type!==""){
        datos = await fetch(`http://${DB_HOST}:3001/${search.type}`)
    }else if(search.send){
        datos = await fetch(`http://${DB_HOST}:3001/entries?dateIni=${search.dbeg}&&dateEnd=${search.dend}${search.typed==="entry"?" 23:59:59":""}&&${search.typed}=${search.typed==="entry"?"meeting":search.tdate}`)
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
    {str:"Usuario",name:"user",sname:"fullname"},
    {str:"Trabajador",name:"worker",sname:"fullname"},
    {str:"Servicio",name:"service",sname:"name"}]
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