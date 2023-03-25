
import React from "react";



 const handleCart=(state={},action)=>{
     
     const product = action.payload;
     switch (action.type ){
         case "ADDITEM":
             //check if product is already there or not
             const exits =state.find((x)=>x.id === product.id);
             if(exits){
                 return state.map((x)=>x.id === product.id ?  {...x,qty:x.qty+1} : x )
             }
             else{
                 const product = action.payload;
                 return [
                     ...state,{
                         ...product,
                         qty:1,
                     }
                 ]
             }
              break;

            case "DELETEITEM"  :
                const exits1 = state.find((x)=>x.id === product.id);
                if(exits1.qty ===1){
                    return state.filter((x)=>x.id ==exits1.id)
                }
                else{
                    return state.map((x)=>x.id ===product.id ? {...x,qty:x.qty-1} : x)
                }
                break;
        default:
            return state;
            break;      
  
     }
 }

 export default handleCart;