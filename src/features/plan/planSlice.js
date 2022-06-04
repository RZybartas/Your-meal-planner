import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import planService from '../../services/planService';

const initialState = {
  meals: [],
  weekPlan: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

//Get day plan
export const getDayPlan = createAsyncThunk(
  'plan/getDayPlan',
  async (calories, { rejectWithValue }) => {
    try {
      return await planService.getDayPlan(calories);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//Get week plan
export const getWeekPlan = createAsyncThunk(
  'plan/getWeekPlan',
  async (calories, { rejectWithValue }) => {
    try {
      return await planService.getWeekPlan(calories);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {},
  extraReducers: {
    [getDayPlan.pending]: (state) => {
      state.isLoading = true;
    },
    [getDayPlan.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.meals = action.payload;
      state.weekPlan = null;
    },
    [getDayPlan.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isError = action.payload;
      state.meals = null;
    },
    [getWeekPlan.pending]: (state) => {
      state.isLoading = true;
    },
    [getWeekPlan.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.weekPlan = action.payload;
      state.meals = null;
    },
    [getWeekPlan.rejected]: (state, action) => {
      state.isSuccess = false;
      state.isError = action.payload;
      state.weekPlan = null;
    },
  },
});

export default planSlice.reducer;
