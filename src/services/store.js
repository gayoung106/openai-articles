import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// store는 전역상태임
// 정보 전체를 저장함
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
