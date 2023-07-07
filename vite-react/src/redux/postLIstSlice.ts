import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import api  from '@/core'


// 게시글 조회
export const asyncValue = createAsyncThunk(
  'postListSlice/asyncValue',
  async (payload, { rejectWithValue })=>{
    try{
      const res = await api.post('/board')
      console.log(res.data)
      return res.data

    }catch(err){
      const error = rejectWithValue(err)
      return error
    }
    // return data.data
  }
)


interface InitialState{
  // value:string
  loading:boolean,
  value : Board[]
} 
const initialState = {
  value:[],
  loading:false
} as InitialState 

const postList = createSlice({
  initialState,
  name:'postList',
  extraReducers:(builder)=>{
    builder.addCase(asyncValue.pending,(state)=>{
      state.loading = true
    })
    builder.addCase(asyncValue.fulfilled,(state,action:PayloadAction<Board[]>)=>{
      state.loading = false
      state.value = action.payload
    })
    builder.addCase(asyncValue.rejected,(state)=>{
      state.loading = false
      
    })
  },
  reducers:{
    valueChange(state){
      // state.value = 'b'
    },
    addWord(state,action:PayloadAction<string>){
      // state.value += action.payload 
    }
  },
  
  
})

export const {valueChange, addWord} = postList.actions 
export default postList.reducer