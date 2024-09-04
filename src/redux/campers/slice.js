
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
    campers: [],
  camper: {
    name: "",
    location:"",
    description:"",
    gallery: [],
    reviews: [],
    rating: 0,
    price: 0,
      
  },
 isLoading: false,
 error: null,
 filters: {
    equipment: [],
    location: "",
    type:"",
   },
 favourites:[],
 },

  extraReducers: builder => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.campers = action.payload.items; 
       })
      .addCase(getAllCampers.rejected, handleRejected)

      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.camper = action.payload;
              })
      .addCase(getCamperById.rejected, handleRejected)
      
  }
});


export const {fetchingInProgres, fetchingSuccess, fetchingError } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
