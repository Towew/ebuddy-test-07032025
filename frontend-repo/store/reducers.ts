// store/reducers.ts
import { createReducer } from "@reduxjs/toolkit";
import { updateUserRequest, updateUserSuccess, updateUserFailure } from "./action";
import { User } from "../apis/user";

interface UserState {
  data?: User;
  loading: boolean;
  error?: string;
}

const initialState: UserState = {
  data: undefined,
  loading: false,
  error: undefined
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateUserRequest, (state) => {
      state.loading = true;
      state.error = undefined;
    })
    .addCase(updateUserSuccess, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(updateUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default userReducer;
