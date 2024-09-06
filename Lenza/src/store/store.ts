"use client";

import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "./Chat/slice";
import messageReducer from "./Message/slice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    messages: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
