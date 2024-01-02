import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { AppStateType } from 'entities/store/redux-store'
import { AllInfoType, InitialStateType } from './testReducerTs.interface'


const initialState: InitialStateType = {

    allInfo: {
        chooseAnswerQuest: '',
        shortAnswerQuest: '',
        shortAnswerBQuest: '',
        chooseAnswerBQuest: '',
        shortAnswerCQuest: '',
        shortAnswerDQuest: '',
        shortAnswerEQuest: '',
        wrongChooseAnswerQuest: '',
        wrongShortAnswerQuest: '',

    }
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        getAllQuestionsCount(state: InitialStateType, action: PayloadAction<{ info: AllInfoType }>) {
            state.allInfo = action.payload.info
        }
    }
})


export const { getAllQuestionsCount } = testSlice.actions


export default testSlice.reducer
