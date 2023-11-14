import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  username: string;
  email: string;
  password: string;
};
type LoginUserAccout = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

class AppwriteService {
  // Create a new record of user inside Appwrite
  async createUserAccount({ username, email, password }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        username,
        email,
        password
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccout) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {}

    return false;
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("getCurrentUser error " + error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("Logout error " + error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
