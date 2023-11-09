import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WalletState {
  username: string;
  password: string

}

const initialState: WalletState = {
username: "",
password:"",



};

export const wallet = createSlice({
  name: "wallet",
  initialState,
  reducers: {

    saveUser: (state, action: PayloadAction<any>) => {
      if (action.payload.username && action.payload.password) {

        state.username = action.payload.username
        state.password = action.payload.password
      }
    }
  
    }
});

export const {
    saveUser
} = wallet.actions;
export default wallet.reducer;
