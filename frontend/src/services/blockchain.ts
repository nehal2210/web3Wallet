import { ethers } from "ethers"

import {AES,SHA256,enc} from "crypto-js"
import axios from "axios"
import { API, BASE_API_URL,DATABASE,DB_TABLE } from "../constants"



const generateWallet = () =>{

    const wallet = ethers.Wallet.createRandom()

    return {
        "address": wallet.address,
        "phrase":wallet.mnemonic.phrase.split(" "),
        "privateKey":wallet.privateKey
    }
}






async function createWallet(username: string, password: string, wallet: any) {




    const hashOfSeedPhrase = SHA256(wallet.phrase.join(",")+ password).toString()
    const hashOfPassword = SHA256(password).toString()

    // original password se encrypted he jo k sirf ap ko pata he
    const encryptedPrivateKey = AES.encrypt(wallet.privateKey, password).toString()
    const encryptedSeedPhrase = AES.encrypt(wallet.phrase.join(","), password).toString()

    console.log(hashOfSeedPhrase)
    console.log(hashOfPassword)
    console.log(encryptedPrivateKey)
    console.log(encryptedSeedPhrase)


    const url = BASE_API_URL + API.WALLET

    // call api
    const response = await axios.post(url, {
        username: username,
        password: hashOfPassword,
        seedHash: hashOfSeedPhrase,
        pk: encryptedPrivateKey,
        sp: encryptedSeedPhrase,
        address: wallet.address
    })

    console.log(response.data)

    // we have to give user control over his seed phrase so we are supposing user save seed phrase by his self anywhere
    // store encrypted seed phrase in local machine in order to create account
    // save seed encypted seeed phrase in text file



    window.localStorage.setItem("saltyPhrase",response.data?.data?.saltySp)
    window.localStorage.setItem("phraseHash",hashOfSeedPhrase)
    window.localStorage.setItem("passwordHash",hashOfPassword)
    window.localStorage.setItem(wallet.address,response.data?.data?.saltyPk)

console.log("Wallet has been saved")

      return true
}



async function addNetwork(network:any) {

    // const network = {
    //     "name": "fuji",
    //     "providerURL": "https://rpc.ankr.com/avalanche_fuji",
    //     "scanURL": "https://testnet.snowtrace.io/",
    //     "coinName": "AVAX",
    //     "chainId": "43113"

    // }

    const ph = window.localStorage.getItem("phraseHash")


    const response = await axios.post(BASE_API_URL + "/network/", {
        walletHash:ph,
        network: network,

    })

    

    return response.data

}



async function decryptSeedPhrase(password:any) {



    console.log("p",password)


    const ph = window.localStorage.getItem("phraseHash")
    const saltySp = window.localStorage.getItem("saltyPhrase")



      const decryptResponse = await axios.post(BASE_API_URL + "/account/decrypt", {
          sp: saltySp
      })


      console.log("decrypt",decryptResponse.data.data.esp)
      const esp = decryptResponse.data.data.esp

     


      return esp
}






async function createAccount(esp:any, password:any, accountName:any, accountNumber:any) {



    console.log("p",password)
    console.log("an",accountName)
    console.log("accNumber",accountNumber)
    console.log("esp",esp)

    const ph = window.localStorage.getItem("phraseHash")
    // const saltySp = window.localStorage.getItem("saltyPhrase")



    //   const decryptResponse = await axios.post(BASE_API_URL + "/account/decrypt", {
    //       sp: saltySp
    //   })


    //   console.log("decrypt",decryptResponse.data.data.esp)
    //   const esp = decryptResponse.data.data.esp

      console.log(esp)

      console.log("aaaaaaaaaaaa")

      const sp = AES.decrypt(esp, password).toString(enc.Utf8)

      console.log("sp",sp);

      try {
          const walletMnemonic = ethers.utils.HDNode.fromMnemonic(sp.replaceAll(","," "));
        //   const walletMnemonic: any = ethers.Wallet.fromMnemonic(sp);
          console.log("w",walletMnemonic)

      

      // we will pass account number on this function letter but right now we are calling api for it


      const path = `m/44'/60'/${accountNumber}'/0/0`; // Derivation path for Ethereum accounts
      const wallet = walletMnemonic.derivePath(path);
      const address = wallet.address;
      const pk = wallet.privateKey;


      console.log("address",address)
      console.log("pk",pk)


      const encryptedPrivateKey = AES.encrypt(pk, password).toString()

      const url = BASE_API_URL + `/account/`

      const response = await axios.post(url, {
        walletHash:ph,  
        address: address,
        name: accountName,
        epk:encryptedPrivateKey
      })

      console.log(response.data)
      console.log(password)

      // const pbk = wallet.publicKey;
      console.log(address)
      console.log(pk)

      localStorage.setItem(address,response.data.sepk)
      return response.data          
    } catch (error) {
      console.log("w",error)
    }

}


const getBalanceOfNative = async (address:string,rpcUrl:string)=>{

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)

    const balance = ethers.utils.formatEther(await provider.getBalance(address))

    return balance


}


export {
    generateWallet,
    createWallet,
    addNetwork,
    createAccount,
    decryptSeedPhrase,
    getBalanceOfNative
}