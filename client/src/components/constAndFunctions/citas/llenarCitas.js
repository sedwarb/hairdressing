import { getDatos } from "../constAndFunions"

export async function llenarCitas(entries,setEntries){
    setEntries(
        {
            ...entries,
            citas:await getDatos(
                {
                    type:"",
                    dbeg:entries.fecha,
                    dend:entries.fecha,
                    typed:"entry",
                    send:true
                }
            )
        }
    )
}