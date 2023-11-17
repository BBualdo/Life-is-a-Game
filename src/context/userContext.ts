import { Models } from "appwrite";
import { createContext } from "react";

const UserContext = createContext<{
  user: Models.User<Models.Preferences> | null;
  setUser: (user: Models.User<Models.Preferences> | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export const UserProvider = UserContext.Provider;

export default UserContext;
