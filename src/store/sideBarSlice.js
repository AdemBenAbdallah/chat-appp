import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value : false
}

export const sideBarSlice = createSlice({
    name : "sideBar",
    initialState,
    reducers : {
        handleOpen : (state) => {
            state.value = !state.value
        }
    }
})

export const { handleOpen } = sideBarSlice.actions
export default sideBarSlice.reducer