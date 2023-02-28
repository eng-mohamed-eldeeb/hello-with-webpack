import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_GREETINGS = 'HELLO-WITH-WEBPACK/app/javascript/redux/greetings/getGreetings';

const initialState = [];

const getGreetingsApi = 'http://127.0.0.1:5000/api/greetings/random';

// action creators to get greetings
export const getGreetings = createAsyncThunk(
    GET_GREETINGS, () => axios.get(getGreetingsApi).then((res) => {
    const greetings = res.data.content;
    return greetings;
  }),
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (_, action) => action.payload);
    builder.addCase(getGreetings.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(getGreetings.pending, (_, action) => action.payload);
  },
});

export default greetingsSlice.reducer;