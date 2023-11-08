import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import {
  getFromSessionStorage,
  setToSessionStorage,
} from "@/utils/session-storage";

export const setAccessToken = (accessToken: string) => {
  return setToSessionStorage(authKey, accessToken as string);
};

export const getAccessToken = () => {
  return getFromSessionStorage(authKey);
};

export const isLoggedIn = () => {
  const authToken = getFromSessionStorage(authKey);
  return !!authToken;
};

export const getUserInfo = () => {
  const authToken = getFromSessionStorage(authKey);

  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const removeUserInfo = (key: string) => {
  return sessionStorage.removeItem(key);
};
