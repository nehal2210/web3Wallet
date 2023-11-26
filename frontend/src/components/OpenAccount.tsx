import { BsX } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import AccountProfiles from "./AccountProfiles";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setOpenAccount } from "../redux/counter";


const OpenAccount = ({ isAccountOpen, isNewAccount, isOpenAccountDetails }: any) => {
    const dispatch = useDispatch();

    const wallet: any = useSelector((state:RootState)=>state.wallet.data)

    return (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 w-full h-[100vh] bg-bgColor2 bg-opacity-50 flex flex-col pt-5 items-center">

            <img src={logo} alt="logo" />
            <div className="w-[25%] pb-4 bg-primary mt-5 border border-white rounded-lg z-40">
                <div className="w-full flex justify-end pt-2 pr-2 text-2xl">
                    <BsX onClick={() => dispatch(setOpenAccount(false))} className="text-btnColor cursor-pointer" />
                </div>
                <h1 className="text-black text-2xl text-center font-bold">Select An Account</h1>

                <div className="relative px-4 mt-4 bg-transparant flex">
                    <Input className="bg-green border-none rounded-lg placeholder-text-black text-black" placeholder="Search Accounts" />
                    <AiOutlineSearch className="absolute right-5 top-1 text-2xl text-btnColor" />
                </div>

                <div className="max-h-[300px] overflow-y-auto mr-2 mt-2" id="style-4">
                   {
wallet["accounts"].map((account:any,i:any)=>{

    return (

        <AccountProfiles account={account}/>
    )
})
}
                   
         
                </div>

                <div className="flex justify-center flex-col items-center mt-2">
                <button className="bg-secondary-dark px-8 py-2 hover:bg-btnColorHover border border-white text-white rounded-full" onClick={() => { isNewAccount('add-account') }}>Add Account</button>
                {/* <button onClick={() => { isNewAccount('import-account') }} className="flex items-center cursor-pointer mt-2">
                    <div className="w-4 h-4 border border-btnColor flex justify-center items-center">
                        <BiPlus className="text-btnColor" />
                    </div>
                    <p className="text-btnColor ms-2 text-sm">Import Account</p>
                </button> */}
                </div>

            </div>
        </div>
    )
}


export default OpenAccount;