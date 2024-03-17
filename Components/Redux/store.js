import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Features/CounterSlice";
import AuthSlice from "./Features/AuthSlice";

export const store=configureStore({
    reducer:{

    counter:CounterSlice,
    auth:AuthSlice
    }
})