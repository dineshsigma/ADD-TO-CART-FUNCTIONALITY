//for Add Item to the cart

export const addCart = (product) =>{
    console.log("adkvbhfsjbvhf",product);
    return {
        type:"ADDITEM",
        payload:product
    }

}

//for delete Item from Cart

export const delCart =(product)=>{
    return{
        type:"DELETEITEM",
        payload:product
    }
}