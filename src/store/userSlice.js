import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value : null ,
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        uploadUser : (state, action) => {
            state.value = action.payload
        },
        deleteUser : (state) => {
            state.value = null
        }
    }
})

export const { uploadUser , deleteUser } = userSlice.actions
export default userSlice.reducer