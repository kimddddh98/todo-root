import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import api  from '@/core'


// 게시글 조회
export const asyncValue = createAsyncThunk(
  'postListSlice/asyncValue',
  async (payload, { rejectWithValue })=>{
    try{
      const {data} = await api.post('/board')
      return data


    }catch(err){
      const error = rejectWithValue(err)
      return error
    }
    // return data.data
  }
)




interface InitialState{
  value:string
  loading:boolean,
  data : Board[]
} 
const initialState = {value:'새로만든리듀서',loading:false,data:[]} as InitialState 
const postList = createSlice({
  initialState,
  name:'postList',
  extraReducers:(builder)=>{
    builder.addCase(asyncValue.pending,(state)=>{
      state.loading = true
    })
    builder.addCase(asyncValue.fulfilled,(state,action:PayloadAction<InitialState>)=>{
      state.loading = false
      state.data = action.payload.data
     
      // console.log('async')
      // state.data = action.payload
    })
    builder.addCase(asyncValue.rejected,(state)=>{
      state.loading = false
      
    })
  },
  reducers:{
    valueChange(state){
      state.value = 'b'
    },
    addWord(state,action:PayloadAction<string>){
      state.value += action.payload 
    }
  },
  
  
})

export const {valueChange, addWord} = postList.actions 
export default postList.reducer