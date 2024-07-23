import axios, { AxiosResponse } from "axios";
import { baseUrl } from "@/src/utils/config";
import IAchievement from "@/src/models/IAchievement";
import IUserAchievement from "@/src/models/IUserAchievement";

class AchievementsService {
  static async getAchievements(): Promise<AxiosResponse<IAchievement[]>> {
    return await axios.get(baseUrl + "achievements/getAchievements", {
      withCredentials: true,
    });
  }

  static async getUserAchievements(
    userId: string,
  ): Promise<AxiosResponse<IUserAchievement[]>> {
    return await axios.get(baseUrl + `achievements/getUserAchievements`, {
      params: {
        userId,
      },
      withCredentials: true,
    });
  }
}

export default AchievementsService;
