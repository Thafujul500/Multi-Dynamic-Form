import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allInformation: {
    personalInfomarion: [],
    educationOrTraining: [],
    employment: [],
  },
};
export const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    addPersonalInformation: (state, action) => {
      const personalData = action.payload;
      console.log("personal reduces", personalData);

      state.allInformation.personalInfomarion.push(personalData);
    },
    addEducationOrTraining: (state, action) => {
      const educationData = action.payload.education;
      state.allInformation.educationOrTraining.push(...educationData);
    },
    addEmployment: (state, action) => {
      const employmentData = action.payload.employment;
      state.allInformation.employment.push(...employmentData);
    },
  },
});

export const { addPersonalInformation, addEducationOrTraining, addEmployment } =
  informationSlice.actions;

export default informationSlice.reducer;
