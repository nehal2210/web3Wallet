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
        <div className="flex flex-col justify-center items-center m-4 ">
            <div className="w-16">
                <img src={logo} alt='Logo' />
            </div>

            <div className="w-[80%] p-4 bg-primary mt-3 rounded-2xl flex flex-col items-center card-shadow z-10 bg-opacity-80">
                <AppHeader />


                <div className= "w-[50%]  rounded-3xl  mt-4 p-4 bg-white-1 card-shadow" >
                    <div className="w-full flex justify-end pt-2 pr-2 text-2xl ">
                        <BsX className="text-btnColor cursor-pointer" />
                    </div>
                    <div className="  w-full pb-4 ">
                        <p className="text-heading text-3xl text-center cursor-pointer font-bold">Import Tokens</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="bg-bgShade  rounded-xl w-[95%] h-[200px] flex justify-center items-center flex-col mt-4">
                            <div className="w-[60px] h-[60px] rounded-full bg-bgColor flex justify-center items-center">
                                <BsInfoLg className="text-white text-5xl" />
                            </div>
                            <p className="w-[95%] mt-4 text-black leading-5 px-2">A malicious network provider can lie about the state of the blockchain and record your network activity. Only add custom networks you trust.</p>
                        </div>
                        <div className="  pt-5 ">
                            <div className="py-2">
                                <label className="text-black ms-2 ">Token contract address</label>
                                <Input className="bg-green  border-none text-black rounded-lg  text-lg mt-2" />
                            </div>
                            <div className="py-2">
                                <label className="text-black ms-2">Token symbol</label>
                                <Input className="bg-green  border-none text-black rounded-lg  text-lg mt-2" />
                            </div>
                            <div className="py-2">
                                <label className="text-black ms-2">Token decimal</label>
                                <Input className="bg-green  border-none text-black rounded-lg  text-lg mt-2" />
                            </div>
                        </div>
                        <div>
                            <button onClick={handleButtonClick}
                                className="px-12 py-3 rounded-full text-white bg-secondary-dark hover:bg-btnColorHover mt-6 text-lg ">Add Token</button>

                        </div>
                    </div>
                </div>
                
                

            </div>
        </div>
    )
}

export default ImportTokens;