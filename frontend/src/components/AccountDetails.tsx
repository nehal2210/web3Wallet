
import { BsX } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { BiSolidCopy } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

const AccountDetails = ({ isAccountDetails }: any) => {
    const [showPrivateKey, setShowPrivateKey] = useState(false);

    
    return (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 w-full h-[100vh] bg-bgColor2 bg-opacity-50 flex flex-col pt-5 items-center">

            <img src={logo} alt="logo" />
            <div className="w-[22%] h-[65%] pb- bg-primary mt-5 border border-white rounded-lg z-40">
                <div className="w-full flex justify-end pt-2 pr-2 text-2xl ">
                    <BsX onClick={() => isAccountDetails(false)} className="text-btnColor cursor-pointer" />
                </div>
                <div className="  w-full ">
                    <p className="text-heading text-2xl text-center cursor-pointer font-bold ">Show Private key</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <div className="w-[85px] h-[85px] bg-secondary-dark rounded-full cursor-pointer mt-5">
                        {/* image */}
                    </div>
                    <div className="flex w-full justify-center py-3 cursor-pointer">
                        <span className="text-black">Account 2</span> <span className=" px-4 text-btnColor py-1"><AiFillEdit /></span>
                    </div>
                </div>
                {
                    showPrivateKey ?
                        <div className="flex flex-col justify-center items-center">

                            <div className="bg-green p-2 mt-5 flex justify-center rounded-md items-center">
                                <p className="text-black">dfseudfiey78fy7f78sdyc78tzxc</p>
                                <BiSolidCopy className="text-btnColor mx-2 cursor-pointer" />
                            </div>
                            <div className=" w-full px-4 py-3 cursor-pointer">
                                <span className="text-black">private key for</span> <span className="text-btnColor  ">Account 2</span>
                            </div>
                            <div className="bg-green  h-[50px] w-[90%]   mt-3 flex justify-between rounded-md items-center px-3">
                                <span className="text-black cursor-pointer ">dfseudfiey78fy7f78sdyc78tzxc7yc78tzxc7</span>

                                <span> <BiSolidCopy className="text-btnColor cursor-pointer   " /></span>
                            </div>

                            <div className="flex items-center justify-center ">
                                <button onClick={() => isAccountDetails(false)} className="px-12 py-2  rounded-full text-white border border-white bg-secondary-dark hover:bg-btnColorHover mt-5">Done</button>
                            </div>
                        </div>


                        :
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-[110px] h-[90px] bg-btnColor mt-3 ">
                            </div>
                            <div className="bg-green p-2 mt-5 flex justify-center rounded-md items-center">
                                <p className="text-black cursor-pointer">dfseudfiey78fy7f78sdyc78tzxddac</p>
                                <BiSolidCopy className="text-btnColor mx-2 cursor-pointer" />
                            </div>
                            <div className="flex items-center justify-center ">
                                <button onClick={() => { setShowPrivateKey(true) }} className="px-6 py-3 rounded-full text-white border border-white bg-secondary-dark hover:bg-btnColorHover mt-4">Show private key</button>
                            </div>
                        </div>

                }







            </div>
        </div>

    )
}

export default AccountDetails;