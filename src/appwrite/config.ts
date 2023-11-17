import conf from "../conf/config";
import { Client, Account, ID, Avatars } from "appwrite";

type CreateUserAccount = {
  email: string;
  password: string;
  username: string;
};
type LoginUserAccout = {
  email: string;
  password: string;
};

export const client = new Client();

client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(client);

export const avatars = new Avatars(client);

class AppwriteService {
  // Create a new record of user inside Appwrite
  async createUserAccount({ email, password, username }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Signup error " + error);
    }
  }

  async login({ email, password }: LoginUserAccout) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      console.error("Login error " + error);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      console.error("isLoggedIn error " + error);
    }

    return false;
  }

  async getCurrentUser() {
    try {
      return account.get();
    } catch (error) {
      console.error("getCurrentUser error " + error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.error("Logout error " + error);
    }
  }

  async getAvatar() {
    try {
      return await avatars.getInitials();
    } catch (error) {
      console.error("Avatar error " + error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
