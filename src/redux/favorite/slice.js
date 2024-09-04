import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    switchFavorite(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.items.push(action.payload);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { switchFavorite } = slice.actions;
export const favoriteReducer = slice.reducer;