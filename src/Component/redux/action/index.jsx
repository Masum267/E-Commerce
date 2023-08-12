export const addCart = (Product) =>{
    return{
        type: "ADDITEM",
        payload : Product
    }
}

export const delCart = (product) =>{
    return{
        type : 'DELITEM',
        payload : product
    }
}