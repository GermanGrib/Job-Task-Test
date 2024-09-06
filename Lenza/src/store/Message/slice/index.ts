"use client";

import { createSlice } from "@reduxjs/toolkit";
import { IMessageState } from "../types";
import { fetchMessages } from "../thunk";

const initialState: IMessageState = {
  messages: [],
  loading: false,
  error: null,
};

const MessagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMessages.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
        state.error = "";
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch chats";
      });
  },
});

export const {} = MessagesSlice.actions;
export default MessagesSlice.reducer;
