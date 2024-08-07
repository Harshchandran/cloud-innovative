

import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import authReducer from "./AuthReducer/reducer";
// import movieReducer from "./MovieReducer/reducer";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // movies: movieReducer,
  },
});
