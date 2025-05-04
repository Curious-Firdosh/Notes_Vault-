import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    pastes : localStorage.getItem( "pastes") 
            ?   JSON.parse( localStorage.getItem( "pastes") )
            : []
}

export const pasteSlice  = createSlice({
    name : "paste",
    initialState,
    reducers : {
        addToPaste : (state , action) => {
            // Add A Cheack For Paste Already Exist 
            const paste = action.payload
            state.pastes.push(paste)
            localStorage.setItem('pastes' , JSON.stringify(state.pastes))
            toast.success("Paste Created SuccessFully 😉")
        },
        removePaste : (state , action) => { 
            const pasteId = action.payload
            
            console.log("PasteId" , pasteId);

            const index = state.pastes.findIndex((item) => 
                item._id === pasteId
            )

            if(index >= 0) {
                state.pastes.splice(index , 1)
                localStorage.setItem("pastes", JSON.stringify(state.pastes))
                toast.success("Paste Removed SuccessFully ")
            }  
        },
        updatePaste : (state , action) => {
              const paste = action.payload 
              const index = state.pastes.findIndex((item) => 
                item._id === paste._id
            )

            if(index >= 0) {
                state.pastes[index] = paste;
                localStorage.setItem("pastes" , JSON.stringify(state.pastes))

                toast.success("Paste Updated SuccessFully")
            }
        },
        resetAllPaste : (state , action) => {
              
        },

    }
})
 export const {addToPaste , updatePaste ,removePaste ,resetAllPaste } = pasteSlice.actions
 export default pasteSlice.reducer

