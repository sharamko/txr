import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  certs: null,
  activeCert: null,
};

const slice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setCerts: (state, action) => {
      state.certs = action.payload;
    },
    setActiveCert: (state, action) => {
      state.activeCert = action.payload;
    },
  },
});

export const { setActiveCert, setCerts } = slice.actions;
export default slice.reducer;
