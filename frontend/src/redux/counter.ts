import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  res: any;
  loading: boolean;
  error: any;
  redirectToDashboard: boolean;
  msgType: string;
  singleMsgObj: any;
  openCompose: boolean;
  getEmails: boolean;
  step: number;
}

const initialState: CounterState = {
  value: 0,
  res: {},
  loading: false,
  error: null,
  redirectToDashboard: false,
  msgType: "inbox",
  singleMsgObj: {},
  openCompose: false,
  getEmails: false,
  step: 0,
};

export const addUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    msgTypeChange: (state, action: PayloadAction<any>) => {
      if (action.payload === "compose-open") {
        state.openCompose = true;
        state.singleMsgObj = {};
      } else {
        state.openCompose = false;
        state.msgType = action.payload;
        state.singleMsgObj = {};
      }
    },
    msgOpenClose: (state, action: PayloadAction<any>) => {
      state.openCompose = false;
      state.singleMsgObj = action.payload;
    },
    isGetEmails: (state, action: PayloadAction<boolean>) => {
      state.getEmails = action.payload;
    },
    resetRedirectToDashboard: (state) => {
      state.redirectToDashboard = false;
    },
    incrementStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const {
  incrementStep,
  resetRedirectToDashboard,
  increment,
  decrement,
  incrementByAmount,
  msgOpenClose,
  msgTypeChange,
  isGetEmails,
} = addUser.actions;
export default addUser.reducer;
