// components/UpdateButton.tsx
import React from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateUserRequest, updateUserSuccess, updateUserFailure } from "../store/action";
import { RootState } from "../store/store";
import { fetchUser } from "../apis/userApi";

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.user);

  const handleClick = async () => {
    dispatch(updateUserRequest());
    try {
      // Ganti "userId" sesuai kebutuhan
      const user = await fetchUser("userId");
      dispatch(updateUserSuccess(user));
    } catch (err: any) {
      dispatch(updateUserFailure(err.message));
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick} disabled={loading}>
        {loading ? "Loading..." : "Fetch User Info"}
      </Button>
      {data && (
        <Typography variant="body1" mt={2}>
          User Data: {JSON.stringify(data)}
        </Typography>
      )}
      {error && (
        <Typography variant="body2" color="error" mt={2}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default UpdateButton;
