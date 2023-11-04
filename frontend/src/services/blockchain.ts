import { ethers } from "ethers"

import {AES,SHA256} from "crypto-js"
import axios from "axios"
import { API, BASE_API_URL } from "../constants"

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


    const url = BASE_API_URL + API.WALLET

    // call api
    // const response = await axios.post(url, {
    //     username: username,
    //     password: hashOfPassword,
    //     seedHash: hashOfSeed,
    //     pk: encryptedPk,
    //     sp: encryptedSp,
    //     address: wallet.address
    // })

    // console.log(response.data)

    // we have to give user control over his seed phrase so we are supposing user save seed phrase by his self anywhere
    // store encrypted seed phrase in local machine in order to create account
    // save seed encypted seeed phrase in text file
    // fs.writeFile(`${__dirname}/static/sp.txt`, response.data?.data?.saltySp + "\n", function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("phrase saved!");
    // });

    // // save encrypted private key into text file
    // fs.writeFile(`${__dirname}/static/pks.txt`, response.data?.data?.saltyPk + "\n", function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("key saved!");
    // });

}






export {
    generateWallet
}