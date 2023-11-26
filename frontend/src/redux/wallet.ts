import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { API, BASE_API_URL, DATABASE, DB_TABLE } from "../constants";
import axios from "axios";
import { addNetwork, addToken, createAccount, decrypt, getBalanceOfNative, getBalanceOfTokens, getTxHistory, sendNativeToken, sendToken } from "../services/blockchain";



export interface WalletState {
  username: string;
  password: string;
  esp: string;
  data: any
  loading : boolean
  currentAccount: any
  currentNetwork: any
  balance: string
  currentTokens : any
  currentToken : any

  reciever: any,
  operation:string,
  txHistory:any,
  accountDetails: any



}

const initialState: WalletState = {
username: "",
password:"",
esp:"",
loading : false,
data: {},
currentAccount:{},
currentNetwork:{},
balance:"0.0",
currentTokens:[],
currentToken:{},
reciever:{},
operation:"",
txHistory:[],
accountDetails: {}

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


export const walletDecrypt: any = createAsyncThunk("walletDecrypt", async(data:any)=>{

  const {password,type,address} = data
   const res = await decrypt(password,type,address)
   console.log(res)
   return res
 
 })


export const walletAddAccount: any = createAsyncThunk("walletAddAccount", async(accountData:any)=>{

 const  {esp,password,aountName, accountNumber} = accountData
  const data = await createAccount(esp,password,aountName, accountNumber)
  console.log(data)
  return data

})


export const walletGetBalance: any = createAsyncThunk("walletGetBalance", async(data:any)=>{

  const  {address,rpcUrl} = data
   const res = await getBalanceOfNative(address,rpcUrl)
   console.log(res)
   return res
 
 })




 export const walletAddToken: any = createAsyncThunk("walletAddToken", async(data:any)=>{

  const  {accountId,body} = data
   const res = await addToken(accountId,body)
   console.log(res)
   return res
 
 })




 export const walletGetToken: any = createAsyncThunk("walletGetToken", async(data:any)=>{

  const  {tokens,rpcUrl, address,network} = data
   const res = await getBalanceOfTokens(tokens, rpcUrl, address,network)
   console.log(res)
   return res
 
 })



 
 export const walletSendToken: any = createAsyncThunk("walletSendToken", async(data:any)=>{

 const {operation,rpcUrl,epk,password,addressTo,addressFrom,amount,tokenAddress} = data
 console.log("to heeeee k nhi")

 if (operation === "sendNativeToken") {
  const res = await sendNativeToken(rpcUrl,epk,password,addressTo,addressFrom,amount)
  console.log(res)
  return res
 }
 else if (operation === "sendToken") {
  
  const res = await sendToken(rpcUrl,epk,password,addressTo,amount,tokenAddress)
  console.log(res)
  return res
 }

 
 })


 export const walletTxHistory: any = createAsyncThunk("walletTxHistory", async(data:any)=>{

  const {address,network } = data
 
   const res = await getTxHistory(network, address)
   console.log(res)
   return res

 
  
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

    setOperation: (state, action: PayloadAction<any>) => {
      state.operation = action.payload
    },


    saveReciverDetails:(state, action: PayloadAction<any>)=>{
      state.reciever = action.payload


    },
    changeAccount:(state, action: PayloadAction<any>)=>{
      state.currentAccount = action.payload

    },

    setCurrentTokenForSend:(state, action: PayloadAction<any>)=>{
      state.currentToken = action.payload
    },

    setCurrentNetwork:(state, action: PayloadAction<any>)=>{
      state.currentNetwork = action.payload
    },


    setAccountDetails:(state, action: PayloadAction<any>)=>{
      state.accountDetails = action.payload
    },


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
              // action.payload.data.wallet.accounts[0].tokens.forEach((e: any) => {
                
              //   action.payload.data.wallet.networks[0].name === e.network  && state.currentTokens.push(getBalanceOfTokens(e,action.payload.data.wallet.networks[0].providerURL,action.payload.data.wallet.accounts[0].address))
                
              // });
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
      
          .addCase(walletDecrypt.pending, (state, action) => {
            console.log('pending', action);
            state.loading = true;
            // state.error = null;
        })
        .addCase(walletDecrypt.fulfilled, (state, action) => {
            console.log('fulfilled', action);
            state.loading = false;
            state.esp = action.payload
        })
        .addCase(walletDecrypt.rejected, (state, action) => {
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

                // get balnce
            
              .addCase(walletGetBalance.pending, (state, action) => {
                  console.log('pending', action);
                  state.loading = true;
                  // state.error = null;
              })
              .addCase(walletGetBalance.fulfilled, (state, action) => {
                  console.log('fulfilled', action);
                  state.balance = action.payload
                  state.loading = false;
              })
              .addCase(walletGetBalance.rejected, (state, action) => {
                  console.log('rejected', action);
                  state.loading = false;
                  // state.error = action.error.message;
              })
          
      
              //walletAddToken

              .addCase(walletAddToken.pending, (state, action) => {
                console.log('pending', action);
                state.loading = true;
                // state.error = null;
            })
            .addCase(walletAddToken.fulfilled, (state, action) => {
                console.log('fulfilled', action);
                // state.balance = action.payload
                state.loading = false;
            })
            .addCase(walletAddToken.rejected, (state, action) => {
                console.log('rejected', action);
                state.loading = false;
                // state.error = action.error.message;
            })
        
              //walletsendToken

              .addCase(walletSendToken.pending, (state, action) => {
                console.log('pending', action);
                state.loading = true;
                // state.error = null;
            })
            .addCase(walletSendToken.fulfilled, (state, action) => {
                console.log('fulfilled', action);
                // state.balance = action.payload
                state.loading = false;
            })
            .addCase(walletSendToken.rejected, (state, action) => {
                console.log('rejected', action);
                state.loading = false;
                // state.error = action.error.message;
            })
        // walletGetToken

        
        .addCase(walletGetToken.pending, (state, action) => {
          console.log('pending', action);
          state.loading = true;
          // state.error = null;
      })
      .addCase(walletGetToken.fulfilled, (state, action) => {
          console.log('fulfilled', action);
          state.currentTokens = action.payload
          state.loading = false;
      })
      .addCase(walletGetToken.rejected, (state, action) => {
          console.log('rejected', action);
          state.loading = false;
          // state.error = action.error.message;
      })
        

      
      // walletTxHistory
      .addCase(walletTxHistory.pending, (state, action) => {
        console.log('pending', action);
        state.loading = true;
        // state.error = null;
    })
    .addCase(walletTxHistory.fulfilled, (state, action) => {
        console.log('fulfilled', action);
        state.txHistory = action.payload
        state.loading = false;
    })
    .addCase(walletTxHistory.rejected, (state, action) => {
        console.log('rejected', action);
        state.loading = false;
        // state.error = action.error.message;
    })
      
        
        
        
        }
});

export const {
    saveUser,
    saveReciverDetails,
    setOperation,
    setCurrentTokenForSend,
    changeAccount,
    setCurrentNetwork,
    setAccountDetails
} = wallet.actions;
export default wallet.reducer;
