import { ethers } from "ethers"

const generateWallet = () =>{

    const wallet = ethers.Wallet.createRandom()

    return {
        "address": wallet.address,
        "phrase":wallet.mnemonic.phrase.split(" "),
        "privateKey":wallet.privateKey
    }
}


export {
    generateWallet
}