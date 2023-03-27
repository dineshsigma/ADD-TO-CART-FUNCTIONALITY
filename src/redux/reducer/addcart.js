import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const addCart = createAsyncThunk('product/addcart', async (payload,thunkAPI) => {
  
   return payload;
  })
 
  export const addCartSlice = createSlice({
      name:'addcart',
      initialState:{
          cartDetails:[]
 
      },
      extraReducers:{
          [addCart.fulfilled]:(state,action)=>{
              
              state.cartDetails=action.payload
            //  state.cartDetails = 
          }
      }
  })
 
 
  export default addCartSlice.reducer