"use client";

import { AppDispatch, useAppSelector } from "../redux/store";
import { useEffect } from "react";
import AuthService from "@/src/services/AuthService";
import { useDispatch } from "react-redux";
import { setUser } from "@/src/redux/slices/authSlice";

const useUser = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user) {
      try {
        AuthService.getCurrentUser().then((res) => dispatch(setUser(res.data)));
      } catch (error) {
        //TODO: Handle errors
        console.log(error);
      }
    }
  }, [user, dispatch]);

  return user;
};

export default useUser;
