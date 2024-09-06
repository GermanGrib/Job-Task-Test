import { RootState } from "../../store";

export const selectChats = (state: RootState) => state.chat.chats;
export const selectChatsLoadingStatus = (state: RootState) =>
  state.chat.loading;
export const selectChatsError = (state: RootState) => state.chat.error;
export const selectActiveChatId = (state: RootState) => state.chat.activeChatId;
