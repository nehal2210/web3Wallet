import { useDispatch,useSelector } from "react-redux";
import { incrementStep } from "../redux/counter";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react"
import { createWallet, generateWallet } from "../services/blockchain";
import PhraseBox from "./PhraseBox";
import {BiSolidCopy} from "react-icons/bi"
import { RootState } from "../redux/store";


interface IWallet {
  "address": String,
  "phrase": Array<String>,
  "privateKey": String
}



function Recovery() {
  
  
  const dispatch = useDispatch();
  const User = useSelector((state: RootState) => state.wallet)
  const [wallet, setWallet] = useState<IWallet>({
    "address": "",
    "phrase": [],
    "privateKey": ""
  })

  const [checkPhrase, setCheckPhrase] = useState(false)
  const [confirmWord, setConfirmWord]: any = useState({})
  const [warning, setWarning] = useState(false)



  const setSteps = () => {
    dispatch(incrementStep(0));
  };


  const revealPhrase = () => {

    const walletObj = generateWallet();
    console.log(walletObj)
    setWallet(walletObj)
  }


  const ConfirmPhrase = () =>{
console.log(confirmWord)

if (confirmWord[0] == wallet.phrase[0] && confirmWord[4] == wallet.phrase[4] && confirmWord[8] == wallet.phrase[8]) {
  
  console.log("Confirmed")
  createWallet(User.username, User.password, wallet)
  dispatch(incrementStep(3));


}

setWarning(true)


  }


const copyPhrase =()=>{
  navigator.clipboard.writeText(wallet.phrase.join(","))
}


  return (
    <>
      <div className="w-[50%] relative bg-primary rounded-2xl pb-8">
        {/* top step Counter Container */}
        <div className="flex justify-center items-center absolute -top-5 w-full">
          <div className="bg-bg-color rounded-full flex justify-center items-center h-10 w-10 ">
            <div className="bg-white rounded-full flex justify-center items-center h-7 w-7 ">
              <p className="">1</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-16 h-1 rounded-full bg-btnColor opacity-40"></div>

          <div className="bg-bg-color rounded-full flex justify-center items-center h-10 w-10 ">
            <div className="bg-white rounded-full flex justify-center items-center h-7 w-7 opacity-30">
              <p className="">2</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-16 h-1 rounded-full bg-btnColor opacity-40"></div>

          <div className="bg-bg-color rounded-full flex justify-center items-center h-10 w-10 ">
            <div className="bg-white rounded-full flex justify-center items-center h-7 w-7 opacity-30">
              <p className="">3</p>
            </div>
          </div>
        </div>

        {/* Steps label */}
        <div className="mt-6 mx-auto w-1/2 flex justify-evenly  ">
          <p className="text-xs text-white">Create Password</p>
          <p className="text-xs text-white opacity-70">Secure wallet</p>
          <p className="text-xs text-white opacity-70">
            Confirm secret
            <br />
            recovery phrase
          </p>
        </div>

        {/* Main Section */}
        <div className="mx-8 my-4">
          {/* Heading Section */}
          <h1 className="text-4xl text-heading font-bold text-center">
            Write down your Secret Recovery Phrase
          </h1>
          <p className="mt-6  text-white-1">
            Write down this 12-word Secret Recovery Phrase and save it in a
            place that you trust and only you can access.
          </p>

          {/* Tips Section */}
          <div className="w-3/5 mx-auto my-4 text-white">
            <h6 className="ml-1">Tips:</h6>
            <ul className="ml-6 list-disc">
              <li className="text-btnColor">
                <span className="text-white">Save in a password manager</span>
              </li>
              <li className="text-btnColor">
                <span className="text-white">Store in a safe deposit box</span>
              </li>
              <li className="text-btnColor">
                <span className="text-white">
                  Write down and store in multiple secret places
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Password Section */}
        <div className="w-3/4 mx-auto rounded-lg  bg-black3 relative">
          {/* parent */}
          
          {!checkPhrase && wallet.phrase.length &&
<BiSolidCopy className="bg-white" onClick={copyPhrase} />
}
          <PhraseBox wallet={wallet} checkPhrase={checkPhrase} confirmWord={confirmWord} setConfirmWord={setConfirmWord} />

          {/* Overflow Container */}
          {!wallet.address &&
            <div className="w-full flex flex-col justify-center items-center h-full top-0 absolute rounded-lg backdrop-blur-sm bg-bg-color/70">
              <AiOutlineEye className="text-btnColor" />
              <p className="text-white">Save in a password manager</p>
            </div>}
        </div>
        {/* Button */}
        <div className="flex justify-center flex-col items-center">

{warning && <p> Wrong Phrase, Please put the right words</p>}

          {checkPhrase ?
            <button
            // disabled={true}
              onClick={() => { ConfirmPhrase() }}
              className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover"
            >
             Confirm
            </button>

            : 
            wallet.phrase.length ?
             <button
              onClick={() => { setCheckPhrase(true) }}
              className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover"
            >
              Next
            </button> 
            :
              <button
                onClick={revealPhrase}
                className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover"
              >
                Reveal Recovery Phrase
              </button>
          }
          {/* <button className="bg-btnColor rounded-full w-48 p-3 text-white-1 mt-4 hover:bg-btnColorHover">Import Wallet</button> */}
        </div>
      </div>
    </>
  );
}

export default Recovery;