import AppHeader from "../components/app-header";
import logo from "../assets/images/logo.png";
import { BsInfoLg, BsX } from "react-icons/bs";
import { Input } from 'antd';
import { useState } from "react";
import SendToken from './../pages/../components/SendToken';




const ImportTokens = () => {

    const [showSendToken, setShowSendToken] = useState(false);

    const handleButtonClick = () => {
        setShowSendToken(true);
    };
    return (
        <div className="flex flex-col justify-center items-center  ">
            <div className="w-16">
                <img src={logo} alt='Logo' />
            </div>

            <div className="w-[80%] p-4 bg-primary mt-3 rounded-2xl flex flex-col items-center">
                <AppHeader />


                <div className= "w-[50%]  rounded-3xl bg-bgColor mt-4 p-4 " >
                    <div className="w-full flex justify-end pt-2 pr-2 text-2xl ">
                        <BsX className="text-btnColor cursor-pointer" />
                    </div>
                    <div className="  w-full pb-4 ">
                        <p className="text-heading text-3xl text-center cursor-pointer ">Import Tokens</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="bg-btnColorHover  rounded-xl w-[95%] h-[200px] flex justify-center items-center flex-col mt-4">
                            <div className="w-[60px] h-[60px] rounded-full bg-primary flex justify-center items-center">
                                <BsInfoLg className="text-btnColorHover text-5xl" />
                            </div>
                            <p className="w-[95%] mt-4 text-white leading-5 px-2">A malicious network provider can lie about the state of the blockchain and record your network activity. Only add custom networks you trust.</p>
                        </div>
                        <div className="  pt-5 ">
                            <div className="py-2">
                                <label className="text-white-1 ms-2 ">Token contract address</label>
                                <Input className="bg-bgColor2 border-none text-white rounded-lg  text-lg mt-2" />
                            </div>
                            <div className="py-2">
                                <label className="text-white-1 ms-2">Token symbol</label>
                                <Input className="bg-bgColor2 border-none text-white rounded-lg  text-lg mt-2" />
                            </div>
                            <div className="py-2">
                                <label className="text-white-1 ms-2">Token decimal</label>
                                <Input className="bg-bgColor2 border-none text-white rounded-lg  text-lg mt-2" />
                            </div>
                        </div>
                        <div>
                            <button onClick={handleButtonClick}
                                className="px-12 py-3 rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-6 text-lg ">Add Token</button>
                            {showSendToken && <SendToken />}

                        </div>
                    </div>
                </div>
                
                

            </div>
        </div>
    )
}

export default ImportTokens;