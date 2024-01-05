import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { AppStateType } from 'entities/store/redux-store'
import { AllExamInfoType, AllInfoAType, AllInfoType, InitialStateType } from './testReducerTs.interface'


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

    },



    allInfoArr: [],
    wrongQuestArr: [],
    subjectName: '',
    examYear: 0,
    examType: ''
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        getAllQuestionsCount(state: InitialStateType, action: PayloadAction<{ info: AllInfoType }>) {
            state.allInfo = action.payload.info
        },
        getAllQuestionsCountFunc(state: InitialStateType, action: PayloadAction<{ info: AllInfoAType }>) {

            state.allInfoArr.push(action.payload.info)
        },
        getAllWrongQuestionsCountFunc(state: InitialStateType, action: PayloadAction<{ info: AllInfoAType }>) {

            state.wrongQuestArr.push(action.payload.info)
        },


        getAllExamInfoCountFunc(state: InitialStateType, action: PayloadAction<{ info: AllExamInfoType }>) {

            state.subjectName = action.payload.info.subjectName
            state.examYear = action.payload.info.examYear
            state.examType = action.payload.info.examType

        },
    }
})


export const { getAllQuestionsCount, getAllQuestionsCountFunc, getAllExamInfoCountFunc, getAllWrongQuestionsCountFunc } = testSlice.actions


export default testSlice.reducer
