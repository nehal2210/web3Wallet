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



    window.localStorage.setItem("saltyPhrase",response.data?.data?.saltySp)
    window.localStorage.setItem("phraseHash",hashOfSeedPhrase)

    window.localStorage.setItem(wallet.address,response.data?.data?.saltyPk)



//     const db = new Dexie(DATABASE);

//     db.version(1).stores(
//   { [DB_TABLE.SEED_PHRASE]: "++id,phrase" })
  
// db.version(1).stores(
//     { [DB_TABLE.PRIVATE_KEYS]: "++id,address,pk" })

//     await db.table(DB_TABLE.SEED_PHRASE).add({
//       phrase: response.data?.data?.saltySp
//   })

//   await db.table(DB_TABLE.PRIVATE_KEYS).add({
//     address:wallet.address,
//       phrase: response.data?.data?.saltyPk
//   })

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





// async function createAccount(walletHash:any,saltySp:any ,password:any, accountName:any, accountNumber:any) {

//   // fs.readFile(`${__dirname}/static/sp.txt`, async function (err, data) {
//   //     if (err) {
//   //         console.log(err)
//   //         return
//   //     }
//   //     const saltySp = data.toString()
//   //     console.log(saltySp)




//       const decryptResponse = await axios.post(BASE_API_URL + "account/decrypt", {
//           sp: saltySp
//       })
//       // console.log("aaaaaaaaaaaaa")
//       console.log("",decryptResponse.data.data.esp)
//       const esp = decryptResponse.data.data.esp


//       const sp = AES.decrypt(esp, password).toString(CryptoJS.enc.Utf8)

//       console.log(sp)
//       const walletMnemonic = ethers.utils.HDNode.fromMnemonic(sp);

//       // we will pass account number on this function letter but right now we are calling api for it


//       const path = `m/44'/60'/${accountNumber}'/0/0`; // Derivation path for Ethereum accounts
//       const wallet = walletMnemonic.derivePath(path);
//       const address = wallet.address;
//       const pk = wallet.privateKey;


//       const url = BASE_API_URL + `account/${walletId}`

//       const response = await axios.post(url, {
//           address: address,
//           name: accountName
//       })

//       console.log(response.data)
//       console.log(password)

//       // const pbk = wallet.publicKey;
//       console.log(address)
//       console.log(pk)

//       // fs.writeFile(`${__dirname}/static/pks.txt`, response.data?.data?.saltyPk + "\n", function (err) {
//       //     if (err) {
//       //         return console.log(err);
//       //     }
//       //     console.log("key saved!");
//       // });

//   })
// }





export {
    generateWallet,
    createWallet
}