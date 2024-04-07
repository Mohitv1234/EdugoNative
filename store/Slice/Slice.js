import { createSlice } from "@reduxjs/toolkit";
// import { parent_category } from "../../data";

const Slice = createSlice({
  name: "Slice",
  initialState: {},
  reducers: {
    getData: (state, action) => {
      const name = action.payload.name;
      state = { ...state, [name]: action.payload.data };
      return state;
    },
    postData: (state, action) => {
      const name = action.payload.name;
      state = { ...state, [name]: action.payload.data };
      return state;
    },
  },
});

export const { getData, postData } = Slice.actions;
export default Slice.reducer;
