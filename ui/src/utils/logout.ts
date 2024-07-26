import AuthService from "@/src/services/AuthService";
import { clearUser, setIsLoggedOut } from "@/src/redux/slices/authSlice";
import { clearUserAchievements } from "@/src/redux/slices/userAchievementsSlice";
import { clearAchievements } from "@/src/redux/slices/achievementsSlice";
import { clearMissions } from "@/src/redux/slices/missionsSlice";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

async function logout(
  dispatch: Dispatch<AnyAction>,
  router: AppRouterInstance,
) {
  dispatch(setIsLoggedOut(true));
  await AuthService.logout();
  router.push("/login");
  dispatch(clearUser());
  dispatch(clearUserAchievements());
  dispatch(clearAchievements());
  dispatch(clearMissions());
}

export default logout;
