import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const addCart = createAsyncThunk('product/addcart', async (payload,thunkAPI) => {
  
   return payload;
  })

 export const userpersonalDetails= createAsyncThunk('/sign',async (payload,thunkAPI)=>{
     return payload
 })
 
  export const addCartSlice = createSlice({
      name:'addcart',
      initialState:{
          cartDetails:[],
          userDetails:""
 
      },
      extraReducers:{
          [addCart.fulfilled]:(state,action)=>{
              state.cartDetails=action.payload
          },
          [userpersonalDetails.fulfilled]:(state,action)=>{
              console.log("action------",action.payload);
            state.userDetails=action.payload
        },

      }
  })
 
 
  export default addCartSlice.reducer