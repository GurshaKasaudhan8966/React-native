import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import  API  from "../../api";
import axios from "axios";

const initialState={
    userData:null,
    isLoading:false,
    isError:false,
    isSuccess:false
}

export const login=createAsyncThunk('login',async (params,thunkApi) =>{
    console.log('login params',params);
    try {
        const response=await axios.post('https://dummyjson.com/auth/login',params)
        console.log('response data',response);
        return response.data
    }
    catch(error)
    {
        console.log('login error',error)
        return thunkApi.rejectWithValue(error.message || 'An error occurred during login')
    }
})

const AuthSlice=createSlice({
    name:'authSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.isLoading=true;

        })
        builder.addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.userData=action.payload

        })
        builder.addCase(login.rejected,(state)=>{
            state.isLoading=false,
            state.isError=true

        })
    }
})

export default AuthSlice.reducer