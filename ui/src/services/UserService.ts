import axios, { AxiosResponse } from "axios";
import { baseUrl } from "@/src/utils/config";
import IUserXpResponse from "@/src/services/DTO/IUserXpResponse";
import IEditProfileDto from "@/src/services/DTO/IEditProfileDto";

class UserService {
  static async addXp(
    userId: string,
    xpAmount: number,
  ): Promise<AxiosResponse<IUserXpResponse>> {
    return await axios.post(
      baseUrl + "user/add-xp",
      { userId, xpAmount },
      { withCredentials: true },
    );
  }

  static async updateProfile(
    userId: string,
    profileInfo: IEditProfileDto,
  ): Promise<AxiosResponse<any, any>> {
    return await axios.put(
      baseUrl + `user/${userId}/update-profile`,
      profileInfo,
      { withCredentials: true },
    );
  }
}

export default UserService;
