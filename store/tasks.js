import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    refresh(state, action) {
      state.items = [];
      state.items = action.payload;
    },
    update(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      delete state.items;
    },
  },
});

export { actions as tasksActions };
export { reducer as tasksReducer };
