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
    },
    business: {
      name: "",
      address: "",
      imageID: "",
      imageUrl: "",
      type: null,
    },
  },
  society: [],
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
    setSociety: (state, action) => {
      state.society.push(action.payload);
      // state.data.society.societyImageUrl = action.payload.societyImageUrl;
      // state.data.society.societyName = action.payload.societyName;
      // state.data.society.societyImageID = action.payload.societyImageID;
    },
    createbusiness: (state, action) => {
      state.data.user = action.payload;
    },
    getBusiness: (state, action) => {
      state.data.business = action.payload;
    },
    getSociety: (state, action) => {
      state.society.push(action.payload);
    },
  },
});

export const {
  startLoading,
  login,
  endLoading,
  updateUser,
  createbusiness,
  getBusiness,
  getSociety,
  setSociety,
} = userSlice.actions;

export default userSlice.reducer;
