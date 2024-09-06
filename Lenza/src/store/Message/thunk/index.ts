import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMessagesList } from "../../../api/message";
import { RootState } from "../../store";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const currentActiveChatID = state.chat.activeChatId;
    try {
      const response = await getMessagesList(currentActiveChatID);
      return response.response;
    } catch (error) {
      console.error("Failed to fetch chats:", error);
      throw error;
    }
  },
);
