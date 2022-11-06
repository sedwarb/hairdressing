export function horas(){
    let horas=[]
    for (let i = 5; i < 23; i++) {horas.push(i<=9?`0${i}:00`:`${i}:00`)}
    return horas
}