import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
  
    filters: {
      equipment: [],
      location: "",
      type: "",
    },
    reducers: {
      changeFilter(state, action) {
        state.quipment = action.payload.equipment;
        state.location = action.payload.location;
        state.type = action.payload.type;
      },
    },
  }
});
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

