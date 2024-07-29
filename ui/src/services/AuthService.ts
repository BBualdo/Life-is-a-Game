import axios, { AxiosResponse } from "axios";
import { baseUrl, externalParams } from "@/src/utils/config";
import ILoginData from "@/src/models/ILoginData";
import IRegisterData from "@/src/models/IRegisterData";
import IUser from "@/src/models/IUser";
import generateRandomString from "@/src/utils/generateRandomString";

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

  static loginWithGithub = () => {
    const params = new URLSearchParams({
      client_id: externalParams.github.clientId!,
      redirect_uri: externalParams.github.redirectUri,
      scope: "read:user",
      state: generateRandomString(),
      prompt: "select_account",
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
  };
}

export default AuthService;
