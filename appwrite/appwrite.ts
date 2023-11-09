import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("654c0c063cb37ade69d3");

export const account = new Account(client);
export { ID } from "appwrite";
