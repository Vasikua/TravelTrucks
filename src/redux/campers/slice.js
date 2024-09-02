
import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById } from './operations';


const handlePending = (state) => {
  state.isLoading = true;
  state.error = false;
}
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const campersSlice = createSlice({
  name:"campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload; 
       })
      .addCase(getAllCampers.rejected, handleRejected)

      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(camper => camper.id === action.payload.id);
                state.items = state.items.filter((_, idx) => idx == index);
              })
      .addCase(getCamperById.rejected, handleRejected)
      
  }
});


export const {fetchingInProgres, fetchingSuccess, fetchingError } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
