import { configureStore } from '@reduxjs/toolkit';
import planReducer from '../features/plan/planSlice';

export const store = configureStore({
  reducer: {
    plan: planReducer,
  },
});
