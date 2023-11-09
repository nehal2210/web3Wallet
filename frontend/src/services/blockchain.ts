import { ethers } from "ethers"

import {AES,SHA256} from "crypto-js"
import axios from "axios"
import { API, BASE_API_URL,DATABASE,DB_TABLE } from "../constants"
import Dexie from 'dexie'



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





    const db = new Dexie(DATABASE);

    db.version(1).stores(
  { [DB_TABLE.SEED_PHRASE]: "++id,phrase" })
  
db.version(1).stores(
    { [DB_TABLE.PRIVATE_KEYS]: "++id,keyId,pk" })

    await db.table("seedPhrase").add({
      phrase: response.data?.data?.saltySp
  })

  await db.table("privateKeys").add({
    keyId:response.data?.data?.accountNumber,
      phrase: response.data?.data?.saltyPk
  })

console.log("Wallet has been saved")


    // chrome.storage.local.set({ "sp": response.data?.data?.saltySp }).then(() => {
    //     console.log("Value is set");
    //   });
    

    // // // save encrypted private key into text file
    
    // chrome.storage.local.set({ "pk1": response.data?.data?.saltyPk }).then(() => {
    //     console.log("Value is set");
    //   });
    
    
    // fs.writeFile(`${__dirname}/static/pks.txt`, response.data?.data?.saltyPk + "\n", function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("key saved!");
    // });

      return true
}






export {
    generateWallet,
    createWallet
}