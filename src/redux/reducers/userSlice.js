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
  role: "",
  society: [],
  customers: [],
  selectedSociety: { id: null, name: "" },
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
    },
    createbusiness: (state, action) => {
      state.data.user = action.payload;
    },
    getBusiness: (state, action) => {
      state.data.business = action.payload;
    },
    getCustomers: (state, action) => {
      state.customers = action.payload;
    },
    getSociety: (state, action) => {
      state.society.push(action.payload);
    },
    setSelectedSociety: (state, action) => {
      state.selectedSociety = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.data = userInitialState.data;
      state.isLoggedIn = false;
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
  getCustomers,
  setSociety,
  setSelectedSociety,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
