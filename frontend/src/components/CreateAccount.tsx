import { BsFillCaretLeftFill, BsX } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { Input } from "antd";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidCopy } from "react-icons/bi";


const CreateAccount = ({ isNewAccount, accountType }: any) => {
    return (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 w-full h-[100vh] bg-bgColor2 bg-opacity-50 flex flex-col pt-5 items-center">

            <img src={logo} alt="logo" />
            <div className="w-[25%] pb-6 bg-primary mt-5 border border-white rounded-lg z-40">
                <div className="w-full flex justify-end pt-2 pr-2 text-2xl ">
                    <BsX onClick={() => isNewAccount('')} className="text-btnColor cursor-pointer" />
                </div>
                <div className="  w-full ">

                    <p className="text-heading text-2xl text-center  ">{accountType === 'add-account' ? 'Add' : 'Import'} Account</p>
                </div>
                {
                    accountType !== 'add-account'
                        ?
                        <div className="bg-btnColorHover border border-white rounded-xl  px-3 mx-3 mt-5 w-[400px]  justify-center items-center flex-col">

                            <p className="py-2 text-white text-sm leading-5">A malicious network provider can lie about the state of the blockchain and record your network activity. Only add custom networks .</p>
                        </div>
                        :
                        null
                }



                <div className=" flex-col justify-center items-center px-5  py-5 " >
                    <label className="text-white-1 ms-2 ">Enter your private key string</label>
                    <Input className="bg-transparant placeholder-header-gradient2  px-2  text-white text-lg mt-1" />
                </div>

                <div className="flex items-center justify-center ">
                    {
                        accountType !== 'add-account'
                            ?
                            <button className="px-12 py-2 rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-4">Import</button>
                            :
                            <button className="px-12 py-2 rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-4">Create</button>
                    }
                </div>

            </div>
        </div>

    )
}


export default CreateAccount;