// store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice";
import postsReducer from "./Features/posts/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

// ✅ ประกาศ type กลาง
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
