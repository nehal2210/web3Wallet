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
  openSendToken: boolean;
  openConfirmationSendToken: boolean;
  openSentToken: boolean;
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
  openSendToken: false,
  openConfirmationSendToken: false,
  openSentToken: false,
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
    setsendTokenModal: (state, action: PayloadAction<boolean>) => {
      state.openSendToken = action.payload;
    },
    
    setConfirmationSendTokenModal: (state, action: PayloadAction<boolean>) => {
      state.openConfirmationSendToken = action.payload;
    },
    // Its a last token slip modal
    setSentTokenModal: (state, action: PayloadAction<boolean>) => {
      state.openSentToken = action.payload;
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
  setsendTokenModal,
  setConfirmationSendTokenModal,
  setSentTokenModal
} = addUser.actions;
export default addUser.reducer;
