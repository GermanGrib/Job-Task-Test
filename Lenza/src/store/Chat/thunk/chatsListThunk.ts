import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChatList } from "../../../api/chat";
import { setActiveChatId } from "../slice";

export const fetchChatAndSetActive = createAsyncThunk(
  "chat/fetchChatAndSetActive",
  async (_, { dispatch, getState }) => {
    try {
      const response = await getChatList();
      const chats = response.response;

      const state = getState() as { chat: { activeChatId: string | null } };
      const currentChatId = state.chat.activeChatId;

      if (chats.length > 0 && !currentChatId) {
        dispatch(setActiveChatId(chats[0].id));
      }
      return chats;
    } catch (error) {
      console.error("Failed to fetch chats:", error);
      throw error;
    }
  },
);
