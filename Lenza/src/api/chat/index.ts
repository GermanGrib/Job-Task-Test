import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";

export const getChatList = () => {
  return wrapper("get", URLS.CHATS, undefined, {
    params: { offset: 0, limit: 20 },
    headers: {
      accept: "application/json",
      version: "0.0",
    },
  });
};
