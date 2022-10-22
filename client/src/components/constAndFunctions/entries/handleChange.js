export function handleChange(e,setStateGen,stateGen){
    setStateGen({...stateGen,[e.target.id]:e.target.value})
}