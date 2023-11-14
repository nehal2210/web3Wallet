import { BsX } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { Input } from "antd";
import ethIcon from '../assets/images/Group 55.png';

const NetworkDetails = ({ openNet }: any) => {
    return (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 w-full h-[100vh] bg-bgColor2 bg-opacity-50 flex flex-col pt-5 items-center">

            <img src={logo} alt="logo" />
            <div className="w-[25%] pb-4 bg-primary mt-5 border border-white rounded-lg z-40">
                <div className="w-full flex justify-end pt-2 pr-2 text-2xl">
                    <BsX onClick={() => openNet(false)} className="text-btnColor cursor-pointer" />
                </div>
                <h1 className="text-black text-2xl text-center font-bold">Network Details</h1>

                <div className="flex justify-center flex-col mt-4 items-center">
                    <div className="flex justify-center items-center">
                        <img width='15px' src={ethIcon} alt="coin Icon" />
                        <p className="text-black ms-2 font-semibold">Ethereum Mainnet</p>
                    </div>

                    <div className="p-4">
                        <div>
                            <label className="text-black ms-2 font-semibold">Network Name</label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" />
                        </div>

                        <div className="mt-2">
                            <label className="text-black ms-2 font-semibold">New RPC URL</label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" />
                        </div>

                        <div className="mt-2">
                            <label className="text-black ms-2 font-semibold">Chain ID</label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" />
                        </div>

                        <div className="mt-2">
                            <label className="text-black ms-2 font-semibold">Currency symbol</label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" />
                        </div>

                        <div className="mt-2">
                            <label className="text-black ms-2 font-semibold">Block explorer URL <span className="text-btnColor text-sm">(Optional)</span></label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NetworkDetails;