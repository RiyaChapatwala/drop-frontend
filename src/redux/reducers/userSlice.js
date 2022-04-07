import { createSlice } from "@reduxjs/toolkit";

export const userInitialState = {
  isActive: false,
  isLoading: true,
  isLoggedIn: false,

  data: {
    access_token: "",
    refresh_token: "",
    user: {
      id: undefined,
      email: "",
      imageUrl: "",
      language: "",
      name: "",
      mobileNo: "",
      societyName: "",
      societyImageUrl: "",
      societyImageID: "",
    },
    business: {
      name: "",
      address: "",
      imageID: "",
      type: null,
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
    createbusiness: (state, action) => {
      state.data.user = action.payload;
    },
  },
});

export const { startLoading, login, endLoading, updateUser, createbusiness } =
  userSlice.actions;

export default userSlice.reducer;
