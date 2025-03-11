// store/actions.ts
import { createAction } from "@reduxjs/toolkit";
import { User } from "../apis/user";

export const updateUserRequest = createAction("user/updateRequest");
export const updateUserSuccess = createAction<User>("user/updateSuccess");
export const updateUserFailure = createAction<string>("user/updateFailure");