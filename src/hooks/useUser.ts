import { useContext } from "react";
import UserContext from "../context/userContext";

const useUser = () => {
  const user = useContext(UserContext);
  return user;
};

export default useUser;
