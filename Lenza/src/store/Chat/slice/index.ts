"use client";

import { createSlice } from "@reduxjs/toolkit";
import { fetchChatAndSetActive } from "../thunk/chatsListThunk";
import { IChatState } from "../types";

const initialState: IChatState = {
  activeChatId: null,
  chats: [],
  loading: false,
  error: null,
};

const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveChatId: (state, action) => {
      state.activeChatId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchChatAndSetActive.pending, state => {
        state.loading = true;
      })
      .addCase(fetchChatAndSetActive.fulfilled, (state, action) => {
        state.loading = false;
        state.chats = action.payload;
        state.error = "";
      })
      .addCase(fetchChatAndSetActive.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch chats";
      });
  },
});

export const { setActiveChatId } = ChatSlice.actions;
export default ChatSlice.reducer;
