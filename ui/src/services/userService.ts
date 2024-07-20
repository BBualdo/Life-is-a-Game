import axios from "axios";
import { baseUrl } from "@/src/utils/config";

class UserService {
  async login(email: string, password: string) {
    return await axios.post(
      baseUrl + "auth/login",
      { email, password, rememberMe: false },
      { withCredentials: true },
    );
  }

  async register(username: string, email: string, password: string) {
    return await axios.post(
      baseUrl + "auth/register",
      { username, email, password },
      { withCredentials: true },
    );
  }
}

const userService = new UserService();

export default userService;
