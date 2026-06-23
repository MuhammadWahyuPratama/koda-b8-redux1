import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    surveys: []
}

const surveySlice = createSlice ({
    name: "survey",
    initialState,
    reducers : {
        addData : (state,action) => {
            state.surveys.push(action.payload)
        },
        removeData : (state,action) => {
            state.surveys = state.surveys.filter((item,index) => index !== action.payload)
        }
    }
})

export const {addData, removeData} = surveySlice.actions
export default surveySlice.reducer

