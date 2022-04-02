import { createSlice } from "@reduxjs/toolkit";

export const userInitialState = {
  isActive: false,
  isLoading: true,
  data: {
    access_token: "",
    refresh_token: "",
    user: {
      id: undefined,
      email: "",
      imageUrl: "",
      language: "",
      type: "",
    },
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    login: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    updateUser: (state, action) => {
      state.data.user = action.payload;
    },
  },
});

export const { startLoading, login, endLoading, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
