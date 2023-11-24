

const formateAddress = (s:string)=>{
    return s.slice(0, 6)+"..."+s.slice(36,42)
}


export{
    formateAddress
}