import { configureStore } from '@reduxjs/toolkit'
import testSlice from 'entities/testR/testReducer'
import { useDispatch } from 'react-redux'


const store = configureStore({
    reducer: {
        testR: testSlice
    }
})

type RootReducerType = typeof store.getState
export type AppStateType = ReturnType<RootReducerType>


export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export default store