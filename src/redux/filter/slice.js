import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    AC: '',
    Automatic: '',
    Kitchen: '',
    TV: '',
    Bathroom: '',
    Van: '',
    FullyIntegrated: '',
    Alcove:'',

  },
  reducers: {
    changeFilter(state, action) {
       state.AC=action.payload;
       state.Automatic=action.payload;
       state.Kitchen=action.payload;
       state.TV=action.payload;
       state.Bathroom=action.payload;
       state.Van=action.payload;
       state.FullyIntegrated=action.payload;
       state.Alcov=action.payload;
      
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

