export function arreglaFecha(fecha){
    let nfecha = {f:fecha.split("T")[0].split("-"),t:fecha.split("T")[1].split(".")[0]}
    nfecha.hm = parseInt(nfecha.t.split(":")[0])>=12?
        `${parseInt(nfecha.t.split(":")[0]-12)}:${nfecha.t.split(":")[1]}:00pm`:
        `${nfecha.t}am`
    return `${nfecha.f[2]}-${nfecha.f[1]}-${nfecha.f[0]} ${nfecha.hm}`
}