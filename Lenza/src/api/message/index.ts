import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";

export const getMessagesList = (chatId: string | null) => {
  return wrapper("get", URLS.MESSAGES, undefined, {
    params: { chat_id: chatId, offset: 0, limit: 20 },
    headers: {
      accept: "application/json",
      version: "0.0",
    },
  });
};
