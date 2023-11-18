import { BsX } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { Input } from "antd";
import ethIcon from '../assets/images/Group 55.png';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";

const NetworkDetails = ({ openNet,exploreNetwork }: any) => {

    // const currentNetwork = useSelector((state:RootState)=>state.wallet.currentNetwork)
    const [isEditable, SetIsEditable] = useState(false) // work on this feature letter

    return (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 w-full h-[100vh] bg-bgColor2 bg-opacity-50 flex flex-col pt-5 items-center">

            <img src={logo} alt="logo" />
            <div className="w-[25%] bg-primary mt-5 border border-white rounded-lg z-40">
                <div className="w-full flex justify-end pt-2 pr-2 text-2xl">
                    <BsX onClick={() => openNet("")} className="text-btnColor cursor-pointer" />
                </div>
                <h1 className="text-black text-2xl text-center font-bold">{networkType}</h1>

                <div className="flex justify-center flex-col mt-4 items-center">
                    {/* <div className="flex justify-center items-center">
                        <img width='15px' src={ethIcon} alt="coin Icon" />
                        <p className="text-black ms-2 font-semibold">{currentNetwork.name}</p>
                    </div> */}

                    <div className="p-4">
                        <div>
                            <label className="text-black ms-2 font-semibold">Network Name</label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" disabled={!isEditable} value={exploreNetwork.name} />
                        </div>

                        <div className="mt-2">
                            <label className="text-black ms-2 font-semibold">New RPC URL</label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" disabled={!isEditable} value={exploreNetwork.providerURL} />
                        </div>

                        <div className="mt-2">
                            <label className="text-black ms-2 font-semibold">Chain ID</label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" disabled={!isEditable} value={exploreNetwork.chainId}/>
                        </div>

                        <div className="mt-2">
                            <label className="text-black ms-2 font-semibold">Currency symbol</label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" disabled={!isEditable} value={exploreNetwork.coinName}/>
                        </div>

                        <div className="mt-2">
                            <label className="text-black ms-2 font-semibold">Block explorer URL <span className="text-btnColor text-sm">(Optional)</span></label>
                            <Input className="bg-green border-none text-black px-2 text-lg mt-1" disabled={!isEditable} value={exploreNetwork.scanURL} />
                        </div>
                        {
                            networkType == 'Add Network'
                                ?
                                <div className="flex justify-evenly items-center mt-4">
                                    <button  className="w-32 py-1 rounded-full text-white bg-btnColor hover:bg-btnColorHover ">Save</button>
                                    <button onClick={() => openNet("")} className="w-32 py-1 rounded-full text-black card-shadow  hover:bg-green ">Cancel</button>

                                </div>
                                :
                                null
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NetworkDetails;