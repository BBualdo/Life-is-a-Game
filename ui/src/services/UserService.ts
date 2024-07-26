import axios, { AxiosResponse } from "axios";
import { baseUrl } from "@/src/utils/config";
import IUserXpResponse from "@/src/services/DTO/IUserXpResponse";

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
}

export default UserService;
