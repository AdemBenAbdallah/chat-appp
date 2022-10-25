import { configureStore } from '@reduxjs/toolkit'
import sideBarSlice from './sideBarSlice'
import userSlice from './userSlice'

export const store = configureStore({
    reducer : {
        user  : userSlice,
        sideBar : sideBarSlice
    }
})