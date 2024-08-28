import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

 axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getAllCampers = createAsyncThunk("campers/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/campers")
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            }   
})


export const getCamperById = createAsyncThunk("campers/getById",
    async(Id, thunkAPI) => {
        try {
            const response = await axios.get(`campers/${Id}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
});       


