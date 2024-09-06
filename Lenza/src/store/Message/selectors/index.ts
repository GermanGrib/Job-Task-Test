import { RootState } from "../../store";

export const selectMessages = (state: RootState) => state.messages.messages;
export const selectMessagesLoadingStatus = (state: RootState) =>
  state.messages.loading;
export const selectMessagesError = (state: RootState) => state.messages.error;
