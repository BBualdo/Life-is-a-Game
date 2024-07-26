"use client";

import { AppDispatch, useAppSelector } from "../../redux/store";
import { useEffect, useState } from "react";
import AuthService from "@/src/services/AuthService";
import { useDispatch } from "react-redux";
import { setUser } from "@/src/redux/slices/authSlice";

const useUser = () => {
  const { user, isLoggedOut } = useAppSelector((state) => state.authReducer);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user && !isLoggedOut) {
      try {
        AuthService.getCurrentUser().then((res) => dispatch(setUser(res.data)));
      } catch (error) {
        //TODO: Handle errors
        console.log("Fetching user data error: " + error);
      }
    }

    setIsLoadingUser(false);
  }, [user, dispatch, isLoggedOut]);

  return { user, isLoadingUser };
};

export default useUser;
