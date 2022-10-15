import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "demoText",
};

const slice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    setDemoText: (state, { payload }) => {
      state.text = payload;
    },
  },
});

export default slice;
