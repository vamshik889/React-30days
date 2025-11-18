const topLevel = ["alarm_name","neid"]
const object = ["obj1","obj2","obj3"]
const addInfo = ["info1","info2","info3","site"]




function builderPath (label ){
if(topLevel.includes(label)){
    return `[${label}]`
}
if(object.includes(label)){
    return `[alarm_msg][alarm][object][${label}]`
}
if(addInfo.includes(label)){
    return `[alarm_msg][alarm][addInfo][${label}]`
}
    return `[alarm_msg][alarm][${label}]` 
    //test
 
}

const columnReducer = ()=>{


    let acc = {filterQuery:""};
    const columnLabel = "site";
    let operator = "contains" , value = "Vamshi"

    const filterQuery =builderPath("obj3");
    acc.filterQuery+= `&filter${filterQuery}[${operator}]=${value}`
    console.log(acc)


}

columnReducer()