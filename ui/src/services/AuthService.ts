import axios, { AxiosResponse } from "axios";
import { baseUrl } from "@/src/utils/config";
import ILoginData from "@/src/models/ILoginData";
import IRegisterData from "@/src/models/IRegisterData";
import IUser from "@/src/models/IUser";

class AuthService {
  static async login(loginData: ILoginData): Promise<AxiosResponse<any, any>> {
    return await axios.post(baseUrl + "auth/login", loginData, {
      withCredentials: true,
    });
  }

  static async register(
    registerData: IRegisterData,
  ): Promise<AxiosResponse<any, any>> {
    return await axios.post(baseUrl + "auth/register", registerData, {
      withCredentials: true,
    });
  }

  static async logout(): Promise<AxiosResponse<any, any>> {
    return await axios.post(
      baseUrl + "auth/logout",
      {},
      { withCredentials: true },
    );
  }

  static async getCurrentUser(): Promise<AxiosResponse<IUser>> {
    return await axios.get(baseUrl + "auth/currentUser", {
      withCredentials: true,
    });
  }
}

export default AuthService;
