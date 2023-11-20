import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Dexie from 'dexie'
import { API, BASE_API_URL, DATABASE, DB_TABLE } from "../constants";
import axios from "axios";
import { addNetwork, createAccount, decryptSeedPhrase } from "../services/blockchain";


export interface WalletState {
  username: string;
  password: string;
  esp: string;
  data: any
  loading : boolean
  currentAccount: any
  currentNetwork: any


}

const initialState: WalletState = {
username: "",
password:"",
esp:"",
loading : false,
data: {},
currentAccount:{},
currentNetwork:{}


};

export const getWallet: any = createAsyncThunk("getWallet", async()=>{

  // const db = new Dexie(DATABASE);
  // const phrases = await db.table(DB_TABLE.SEED_PHRASE).get(1)
  // console.log("ccccc")
  // console.log(phrases)
  const ph = window.localStorage.getItem("phraseHash")
  console.log(ph)
  const url = BASE_API_URL+API.WALLET + "/get"
  const data = await axios.post(url,{walletHash:ph})
  console.log(data)

  return data

})



export const walletAddNetwork: any = createAsyncThunk("walletAddNetwork", async(network:any)=>{

  const data = await addNetwork(network)
  console.log(data)
  return data

})


export const walletDecryptPhrase: any = createAsyncThunk("decryptSeedPhrase", async(password:any)=>{

  
   const data = await decryptSeedPhrase(password)
   console.log(data)
   return data
 
 })


export const walletAddAccount: any = createAsyncThunk("walletAddAccount", async(accountData:any)=>{

 const  {esp,password,aountName, accountNumber} = accountData
  const data = await createAccount(esp,password,aountName, accountNumber)
  console.log(data)
  return data

})





export const wallet = createSlice({
  name: "wallet",
  initialState,
  reducers: {

    saveUser: (state, action: PayloadAction<any>) => {
      if (action.payload.username && action.payload.password) {

        state.username = action.payload.username
        state.password = action.payload.password
      }
    },

    changeAccount:(state, action: PayloadAction<any>)=>{

    }

    
  
    },
    extraReducers: (builder) => {
      builder
          .addCase(getWallet.pending, (state, action) => {
              console.log('pending', action);
              state.loading = true;
              // state.error = null;
          })
          .addCase(getWallet.fulfilled, (state, action) => {
              console.log('fulfilled', action);
              state.loading = false;
              state.data = action.payload.data.wallet
              state.currentAccount = action.payload.data.wallet.accounts[0]
              state.currentNetwork = action.payload.data.wallet.networks[0]
          })
          .addCase(getWallet.rejected, (state, action) => {
              console.log('rejected', action);
              state.loading = false;
              // state.error = action.error.message;
          })
        

          // walletAddNetwork
      
          .addCase(walletAddNetwork.pending, (state, action) => {
            console.log('pending', action);
            state.loading = true;
            // state.error = null;
        })
        .addCase(walletAddNetwork.fulfilled, (state, action) => {
            console.log('fulfilled', action);
            state.loading = false;
            state.data.networks.push(action.payload.network)
        })
        .addCase(walletAddNetwork.rejected, (state, action) => {
            console.log('rejected', action);
            state.loading = false;
            // state.error = action.error.message;
        })
    

          // wallet DECRYPT SEEDPHRSE
      
          .addCase(walletDecryptPhrase.pending, (state, action) => {
            console.log('pending', action);
            state.loading = true;
            // state.error = null;
        })
        .addCase(walletDecryptPhrase.fulfilled, (state, action) => {
            console.log('fulfilled', action);
            state.loading = false;
            state.esp = action.payload
        })
        .addCase(walletDecryptPhrase.rejected, (state, action) => {
            console.log('rejected', action);
            state.loading = false;
            // state.error = action.error.message;
        })
    
                  // wallet Add Account
      
                  .addCase(walletAddAccount.pending, (state, action) => {
                    console.log('pending', action);
                    state.loading = true;
                    // state.error = null;
                })
                .addCase(walletAddAccount.fulfilled, (state, action) => {
                    console.log('fulfilled', action);
                    state.data.accounts.push(action.payload.account)
                    state.currentAccount = action.payload.account
                    state.loading = false;
                })
                .addCase(walletAddAccount.rejected, (state, action) => {
                    console.log('rejected', action);
                    state.loading = false;
                    // state.error = action.error.message;
                })
            
        


        
        
        
        
        
        }
});

export const {
    saveUser
} = wallet.actions;
export default wallet.reducer;
