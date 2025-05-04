import { configureStore } from "@reduxjs/toolkit";
import  pasteSlice  from "../Reducers/pasteSlice";

export const store = configureStore({
    reducer: {
      paste : pasteSlice
    }
})