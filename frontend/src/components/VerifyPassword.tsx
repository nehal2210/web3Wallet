import { BsFillCaretLeftFill, BsX } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { Input } from "antd";
import { setPasswordState, setPasswordVerify } from "../redux/counter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {SHA256} from "crypto-js";
import { walletAddAccount, walletDecryptPhrase } from "../redux/wallet";
import { RootState } from "../redux/store";


const VerifyPassword = () => {
    const dispatch = useDispatch();
    const [Password,SetPassword] = useState("")
    const account = useSelector((state:RootState)=>state.user.newAccount)
    const wallet = useSelector((state:RootState)=>state.wallet)


    console.log(Password)
 
    const handleSubmitPassword = () =>{

        // chek password first

        const passwordHashStore = localStorage.getItem("passwordHash")
        const passwordHash = SHA256(Password).toString()

        if (passwordHashStore === passwordHash) {

            console.log("password matched")
            // set password in state
            setPasswordState(Password)

            // close modal
            dispatch(setPasswordVerify(false))

            dispatch(walletDecryptPhrase(Password)).then((res:any)=>{

                console.log("pppppppppppppp",res.payload)
                dispatch(walletAddAccount({esp:res.payload, password:Password,aountName:account.aountName, accountNumber:account.accountNumber}))


            })
        }

        else{
            console.log("wrong Password")
        }


    }
 
    
    return (
        <div className="fixed z-20 top-0 right-0 bottom-0 left-0 w-full h-[100vh] bg-bgColor2 bg-opacity-50 flex flex-col pt-5 items-center">
            <img src={logo} alt="logo" />
            <div className="w-[25%] pb-4 bg-primary mt-5 border border-white rounded-lg z-40">
                <div className="w-full flex justify-end pt-2 pr-2 text-2xl ">
                    <BsX  onClick={() => dispatch(setPasswordVerify(false))} className="text-btnColor cursor-pointer" />
                </div>
                <div className="  w-full ">
                    <p className="text-heading text-2xl text-center  "> Password</p>
                </div>
                <div className=" flex-col justify-center items-center px-5 mt-2" >
                    <label className="text-black ms-2 ">Enter your Password here</label>
                    <Input onChange={(e)=> SetPassword(e.target.value)}  className="bg-green border-none placeholder-header-gradient2  px-2  text-black text-lg mt-1" />
                </div>
                <div className="flex items-center justify-center ">
               <button onClick={handleSubmitPassword} className="px-12 py-2 rounded-full text-white bg-secondary-dark hover:bg-btnColorHover mt-4">save</button>
                </div>
            </div>
        </div>

    )
}


export default VerifyPassword;