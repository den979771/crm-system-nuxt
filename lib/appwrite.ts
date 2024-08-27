import { Account, Client, Databases, Storage } from "appwrite";
import { APP_WRITE_ID } from "./app_contacts";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(APP_WRITE_ID);

export const account = new Account(client);
export { ID } from "appwrite";
export const DB = new Databases(client);
export const storage = new Storage(client);
