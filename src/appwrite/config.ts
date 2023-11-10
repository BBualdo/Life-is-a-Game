import config from "../config/config,";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

export const client = new Client();

client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);

export const account = new Account(client);

class AppwriteService {
  // Create a new record of user in Appwrite
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
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

  async login({ email, password }: LoginUserAccount) {
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
      console.log("getCurrentUser error", error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("Logout error: " + error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
