import AppHeader from "../components/app-header";
import logo from "../assets/images/logo.png";
import { BsFillForwardFill, BsInfoLg, BsX } from "react-icons/bs";
import { Input } from 'antd';
import EthereumIcon from '../assets/images/Group 55.png';
import { AiFillEdit } from "react-icons/ai";
import { BiSolidRightArrowAlt } from "react-icons/bi";




const Addnetwork = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-16">
                <img src={logo} alt='Logo' />
            </div>

            <div className="w-[80%] p-4 bg-primary mt-3 rounded-2xl flex flex-col items-center card-shadow z-10 bg-opacity-80">
                <AppHeader />


                <div className="w-full h-full rounded-lg  mt-4 p-4">
                    <h2 className="text-heading text-2xl">Add Network</h2>
                    <div className="w-full h-[2px] bg-btnColor mt-2"></div>
                    <div className="">
                        <div className="flex justify-between p-4 pt-5 w-full">
                            <div>
                                <div className="w-[70%]">
                                    <label className="text-black ms-2 font-semibold">Network Name</label>
                                    <Input className="bg-green text-black border-none px-2 text-lg mt-1" />
                                </div>
                                <div className="w-[70%] mt-4">
                                    <label className="text-black ms-2 font-semibold">New RPC URL</label>
                                    <Input className="bg-green text-black border-none px-2 text-lg mt-1" />
                                </div>
                                <div className="w-[70%] mt-4">
                                    <label className="text-black ms-2 font-semibold">Chain ID</label>
                                    <Input className="bg-green text-black border-none px-2 text-lg mt-1" />
                                </div>
                                <div className="w-[70%] mt-4">
                                    <label className="text-black ms-2 font-semibold">Currency symbol</label>
                                    <Input className="bg-green text-black border-none px-2 text-lg mt-1" />
                                </div>
                                <div className="w-[70%] mt-4">
                                    <label className="text-black ms-2 font-semibold">Block explorer URL <span className="text-btnColor text-sm">(Optional)</span></label>
                                    <Input className="bg-green text-black border-none px-2 text-lg mt-1" />
                                </div>
                            </div>
                            <div className="bg-secondary-dark border-none  rounded-xl w-[45%] h-[200px] flex justify-center items-center flex-col">
                                <div className="w-[60px] h-[60px] rounded-full bg-bgColor flex justify-center items-center">
                                    <BsInfoLg className=" text-5xl" />
                                </div>
                                <p className="w-[95%] mt-4 text-black leading-5">A malicious network provider can lie about the state of the blockchain and record your network activity. Only add custom networks you trust.</p>
                            </div>
                        </div>
                        <div className="w-full h-[2px] bg-btnColor mt-2"></div>
                        <button className="px-10 py-1 rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-4">Save</button>
                    </div>
                </div>
            </div>
        </div>




    )
}


export default Addnetwork;



