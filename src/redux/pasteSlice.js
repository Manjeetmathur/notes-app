import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes") ?JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state , action) => {
       const paste = action.payload
       state.pastes.push(paste)
       localStorage.setItem("pastes",JSON.stringify(state.pastes))
       toast.success("Paste Created Successfully. . . ")
      
    },
    updateToPastes : (state,action) => {

       const paste = action.payload
       const index = state.pastes.findIndex((item) => item._id === paste._id) 
       if(index >=0){
              state.pastes[index] = paste
              localStorage.setItem("pastes",JSON.stringify(state.pastes))
              toast("Paste Updated Successfully . . . ")
       }

    },
    resetAllPaste: (state, action) => {
       state.pastes = []
       localStorage.removeItem("pastes")
      
    },
    removeFromPaste : (state,acton) => {

       const pastesId = acton.payload

       const index = state.pastes.findIndex((item) => item._id ===  pastesId);

       if(index >= 0 ){
              state.pastes.splice(index,1);

              localStorage.setItem("pastes",JSON.stringify(state.pastes))

              toast.success("Paste Deleted SuccessFully . . .")
       }
 
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPaste, removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer