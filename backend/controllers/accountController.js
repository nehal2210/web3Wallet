
const Account = require("../models/accountModel")
const Wallet = require("../models/walletModel")
const CryptoJS = require("crypto-js")




exports.getAccount = async (req, res) => {
    const wallet = await Wallet.findById(req.params.walletId).populate("accounts")
    const accounts = wallet.accounts
    res.status(200).json({ status: "success", message: "accounts have been sent", accounts: accounts })
}


exports.decrypt = async (req, res) => {

    console.log(req.body)
    const ed = CryptoJS.AES.decrypt(req.body.sd, process.env.SALT).toString(CryptoJS.enc.Utf8)
    console.log(ed)

    return res.status(200).json({ status: "success", message: "data decrypted", data: { ed: ed } })

}






exports.addAccount = async (req, res) => {
    console.log("asaaaasdasfdfsdgsdga")
  
    // chek wallet exist
    const wallet = await Wallet.findOne( {seedHash: {$eq:req.body.walletHash} })
    if (!wallet) {
        return res.status(404).json({ status: "fail", message: "wallet not found" })

    }


const saltyEpk = CryptoJS.AES.encrypt(req.body.epk, process.env.SALT).toString()

    // create new account
    const account = new Account({
        accountNumber: wallet.accountCount + 1,
        name: req.body.name ? req.body.name : "Account " + (wallet.accountCount + 1),
        address: req.body?.address
    })

    account.wallet = wallet
    await account.save()

    // push account into wallet
    wallet.accounts.push(account)
    wallet.accountCount += 1
    await wallet.save()



    return res.status(201).json({ status: "success", message: "account has been created", account: account, sepk:saltyEpk })


}


