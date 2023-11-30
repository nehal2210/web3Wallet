import { ethers } from "ethers"

import {AES,SHA256,enc} from "crypto-js"
import axios from "axios"
import { API, BASE_API_URL,DATABASE,DB_TABLE, ERC20_ABI } from "../constants"


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



async function decrypt(password:any,type:string,address:string="") {



    console.log("p",password)
    console.log("t",type)
    console.log("a",address)
    

    if (type==="seedPhrase") {
    
        const saltySp = window.localStorage.getItem("saltyPhrase")
      const decryptResponse = await axios.post(BASE_API_URL + "/account/decrypt", {
          sd: saltySp
      })
      console.log("decrypt",decryptResponse.data.data.esp)
      const esp = decryptResponse.data.data.ed
      return esp
    }
    else  if (type==="privateKey"){

    const spk = window.localStorage.getItem(address)
    const decryptResponse = await axios.post(BASE_API_URL + "/account/decrypt", {
          sd: spk
      })
      console.log("decrypt",decryptResponse.data.data.esp)
      const esp = decryptResponse.data.data.ed
      const pk = AES.decrypt(esp, password).toString(enc.Utf8)
      return pk
    }


    
    
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

    const balance = parseFloat(Number(ethers.utils.formatEther(await provider.getBalance(address))).toFixed(4))

    return balance


}


const getBalanceOfTokens = async(tokens:any,rpcUrl:string,address:string,currentNetwork:string)=>{
    // balances =
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
    let arr = []
    for (let index = 0; index < tokens.length; index++) {

      // todo: error handle
      if (currentNetwork===tokens[index].network){

        const contract = new ethers.Contract(tokens[index].address,ERC20_ABI,provider)
        const balance = await contract.balanceOf(address)
        arr.push({...tokens[index],balance:ethers.utils.formatEther(balance)})
      }
      
    }

    return arr

}



const getTokenDetail = async(address:string,rpcUrl:string)=>{

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)

    const contract = new  ethers.Contract(address,ERC20_ABI,provider)

  
    const res = await  Promise.all([contract.name(),contract.symbol(),contract.decimals()])
    return res

}


const addToken = async(accountId:string,data:any)=>{
   
   const url = BASE_API_URL+"/token/"+accountId

   const ph = window.localStorage.getItem("phraseHash")

    const response = await axios.post(url, {
    ...data,
    walletHash:ph
      })

      return response.data
}



const sendNativeToken = async (rpcUrl:string,pk:string,password:string,addressTo:string,addressFrom:string,amount:string)=>{

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
    console.log("native")
    console.log(password)
    
    console.log(amount)
    console.log(addressTo)
    
    console.log(pk)
    
    const wallet = new ethers.Wallet(pk,provider)
    const tx = {
        from:addressFrom,
        to: addressTo,
        value: ethers.utils.parseEther(amount),
      };
    console.log(tx)
      const createReceipt = await wallet.sendTransaction(tx);
  await createReceipt.wait();
  console.log(`Transaction successful with hash: ${createReceipt}`);


//    Todo : error handle when TX Fails
  return createReceipt
};


const sendToken = async (rpcUrl:string,pk:string,password:string,addressTo:string,amount:string,tokenAddress:string)=>{

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
  console.log("native")
  console.log(password)

  console.log(amount)
  console.log(addressTo)
  console.log(pk)
  
  const wallet = new ethers.Wallet(pk,provider)
  const contract = new ethers.Contract(tokenAddress,ERC20_ABI,wallet)
    const createReceipt = await contract.transfer(addressTo,ethers.utils.parseEther(amount));
await createReceipt.wait();
console.log(`Transaction successful with hash: ${createReceipt}`);


//    Todo : error handle when TX Fails
return createReceipt
};


function timeConverter(UNIX_timestamp:any){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();

  var time = date + ' ' + month + ' ' + year;
  return time;
}

const getTxHistory = async (network:string,address:string) =>{

  console.log()
  const  etherscanProvider = new ethers.providers.EtherscanProvider(network.toLowerCase());

 const h = await etherscanProvider.getHistory(address)

 const sh = h.sort(function(a:any, b:any){return b.timestamp - a.timestamp});

 let arr = []
 for (let index = 0; index < sh.length; index++) {
     arr.push({
 hash:sh[index].hash,
 action: sh[index].from === address ? "Sent":"Received",
 date: timeConverter(sh[index].timestamp),
 amount: ethers.utils.formatEther(sh[index].value),
 status:"confirmed"
     })
     
 }
 
 console.log(arr)

 return arr

}



const importWallet = async(seedPhrase: any,password:string)=>{
  
  const hashOfSeedPhrase = SHA256(seedPhrase.join(",") +  password).toString()
  const hashOfPassword = SHA256(password).toString()

  const url = BASE_API_URL + "/wallet/import"

  const response = await axios.post(url, {
    seedHash:hashOfSeedPhrase,
    passwordHash:hashOfPassword
    
      })

console.log(response)
      if (response.data.isAuthentic) {

        const wallet = ethers.Wallet.fromMnemonic(seedPhrase.join(" "))
        console.log(wallet.privateKey)
        // original password se encrypted he jo k sirf ap ko pata he
        
        
        const encryptedPrivateKey = AES.encrypt(wallet.privateKey, password).toString()
        const encryptedSeedPhrase = AES.encrypt(seedPhrase.join(","), password).toString()


        let pks = [encryptedPrivateKey]
        let adds = [wallet.address]
        const walletMnemonic = ethers.utils.HDNode.fromMnemonic(seedPhrase.join(" "));
        for (let index = 1; index <= response.data.noOfAccounts; index++) {

   
    
        let path = `m/44'/60'/${index}'/0/0`; // Derivation path for Ethereum accounts
        let wallet = walletMnemonic.derivePath(path);
        let address = wallet.address;
        let pk = wallet.privateKey;
  
  
        console.log("address",address)
        console.log("pk",pk)
  
  
        const encryptedPrivateKey = AES.encrypt(pk, password).toString()
          
          adds.push(address)
          pks.push(encryptedPrivateKey)
          
        }

 // call api
  const url = BASE_API_URL + "/account/encrypt/bulk"
  const res = await axios.post(url, {
    epks: pks,
    esp: encryptedSeedPhrase,
  })
        

      if (res.data.status) {
        const spks = res?.data?.data?.spks || []

        for (let index = 0; index < spks?.length; index++) {
          window.localStorage.setItem(adds[index],spks[index])
          
        }


        window.localStorage.setItem("phraseHash",hashOfSeedPhrase)
        window.localStorage.setItem("passwordHash",hashOfPassword)
        window.localStorage.setItem("saltyPhrase",res.data?.data?.sp)

        return true
      }


        
        return false
      }
    console.log(response)


    return false
}


export {
    generateWallet,
    createWallet,
    addNetwork,
    createAccount,
    decrypt,
    getBalanceOfNative,
    getBalanceOfTokens,
    getTokenDetail,
    addToken,
    sendNativeToken,
    sendToken,
    getTxHistory,
    importWallet
}