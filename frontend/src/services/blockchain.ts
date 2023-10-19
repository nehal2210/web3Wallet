import ethers from "ethers"

// WALLETS
export const createWallet = () => {

    const wallet = ethers.Wallet.createRandom()
    console.log('address:', wallet.address)
    console.log('mnemonic:', wallet.mnemonic.phrase)
    console.log('privateKey:', wallet.privateKey)

}

export const importWallet = (mnemonic: string) => {
    // ethers.utils.isValidMnemonic
    const wallet = ethers.Wallet.fromMnemonic(mnemonic)
    console.log('address:', wallet.address)
    console.log('mnemonic:', wallet.mnemonic.phrase)
    console.log('privateKey:', wallet.privateKey)
}


// ACCOUNTS

export const createAccount = (mnemonic: string, accountNum: Number) => {

    const walletMnemonic = ethers.utils.HDNode.fromMnemonic(mnemonic);
    const path = `m/44'/60'/0/0/${accountNum}`; // Derivation path for Ethereum accounts
    const wallet = walletMnemonic.derivePath(path);
    const address = wallet.address;
    const pk = wallet.privateKey;
    const pbk = wallet.publicKey;

}


export const importAccount = (privateKey: string) => {

    const wallet = new ethers.Wallet(privateKey)
    console.log(wallet.address)

}

// export const getAccount = () => {


// }


// TOKEN


export const importToken = () => {


}

export const sendToken = () => {

}




// Activities

export const sendNativeCoin = () => {

    // local storage se private key nikaalen ge
    //phele us ko server se decrypt kren ge
    // phir password se decrypt kren ge phir Tx kren ge


}




