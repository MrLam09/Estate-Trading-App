import { configureStore } from "@reduxjs/toolkit";
import estateAPI from "./estate/estateAPI";

export const store = configureStore({
    reducer: {
        [estateAPI.reducerPath]: estateAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(estateAPI.middleware),
})

