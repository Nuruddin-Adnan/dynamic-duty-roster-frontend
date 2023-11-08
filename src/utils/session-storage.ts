export const setToSessionStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return sessionStorage.setItem(key, token);
};

export const getFromSessionStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return sessionStorage.getItem(key);
};
