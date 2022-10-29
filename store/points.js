import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "points",
  initialState: {
    item: 0,
  },
  reducers: {
    refresh(state, action) {
      state.item = 0;
      state.item = action.payload;
    },
    update(state, action) {
      state.item = state.item + action.payload;
    },
    remove(state, action) {
      delete state.item;
    },
  },
});

export { actions as pointsActions };
export { reducer as pointsReducer };
