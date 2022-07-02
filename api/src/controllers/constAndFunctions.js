
const exclutionInInclude = {exclude: ["createdAt","updatedAt"]}
const exclutionppal = [
    "createdAt",
    "updatedAt",
    "userPhoneNumber",
    "workerId",
    "serviceId"
]
function createWhereObj(workerId,phoneNumber,entry,whereObj){
    const size = [workerId,phoneNumber,entry].filter(p=>p!==undefined).length
    whereObj.entryType="entry"
    if(size===1){
        if(workerId) whereObj.workerId=workerId
        if(phoneNumber) whereObj.userPhoneNumber=phoneNumber
        if(entry) whereObj.entryType=entry        
    }
    return whereObj
}

module.exports={
    exclutionInInclude,
    exclutionppal,
    createWhereObj
}