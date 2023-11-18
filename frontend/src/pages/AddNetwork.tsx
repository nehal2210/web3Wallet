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


                <div className="w-full h-full rounded-lg mt-4 p-4">
                    <h2 className="text-heading text-2xl">Add Network</h2>
                    <div className="w-full h-[2px] bg-btnColor mt-2"></div>
                    <div className="">
                        <div className="flex justify-between p-4 pt-5 w-full">
                        <div>
                                <div className="w-[70%]">
                                    <label className="text-white-1 ms-2">Network Name</label>
                                    <Input className="bg-transparant text-white px-2 text-lg mt-1" />
                                </div>

                                <div className="w-[70%] mt-4">
                                    <label className="text-white-1 ms-2">New RPC URL</label>
                                    <Input className="bg-transparant text-white px-2 text-lg mt-1" />
                                </div>

                                <div className="w-[70%] mt-4">
                                    <label className="text-white-1 ms-2">Chain ID</label>
                                    <Input className="bg-transparant text-white px-2 text-lg mt-1" />
                                </div>

                                <div className="w-[70%] mt-4">
                                    <label className="text-white-1 ms-2">Currency symbol</label>
                                    <Input className="bg-transparant text-white px-2 text-lg mt-1" />
                                </div>

                                <div className="w-[70%] mt-4">
                                    <label className="text-white-1 ms-2">Block explorer URL <span className="text-btnColor text-sm">(Optional)</span></label>
                                    <Input className="bg-transparant text-white px-2 text-lg mt-1" />
                                </div>

                        </div>
                        <div className="bg-btnColorHover border border-white rounded-xl w-[40%] h-[200px] flex justify-center items-center flex-col">
                            <div className="w-[60px] h-[60px] rounded-full bg-primary flex justify-center items-center">
                                <BsInfoLg className="text-btnColorHover text-5xl" />
                            </div>
                            <p className="w-[95%] mt-4 text-white leading-5">A malicious network provider can lie about the state of the blockchain and record your network activity. Only add custom networks you trust.</p>
                        </div>
                        </div>
                        
                        <div className="w-full h-[2px] bg-btnColor mt-2"></div>
                                <button className="px-10 py-1 rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-4">Save</button>
                    </div>

                </div> 





                {/* <div className="w-[50%]  rounded-3xl bg-bgColor mt-4 p-4">
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
                            <button className="px-12 py-3 rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-6 text-lg ">Add Token</button>                           
                        </div>
                    </div>
                </div> */}








                {/* <div className="w-[45%]  rounded-3xl bg-bgColor mt-4 p-4">
                    <div className="w-full flex justify-end pt-2 pr-2 text-2xl ">
                        <BsX className="text-btnColor cursor-pointer" />
                    </div>
                    <div className="  w-full pb-4 ">
                        <p className="text-heading text-3xl text-center cursor-pointer ">Send Tokens</p>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-5">
                        <div className="flex w-full px-3 ">
                            <span className="mx-2 my-2 text-white">wallet address</span>
                            <span className="w-[73%] mx-1"><Input className=" text-white border-none bg-bgColor2  text-lg mt-1" />
                            </span>
                        </div>
                        <div className="flex w-full mt-8 ">
                            <div className="mx-4 my-2 text-white">Assets</div>
                            <div className="w-[73%] mx-11 py-1 px-4 bg-bgColor2 rounded-xl">
                                <div className="flex px-3 py-2 text-white">
                                <img className="h-6" src={EthereumIcon} alt="Ethereum Icon" />
                                    <p className="ps-3">ETH</p>
                                    <div className="flex justify-end items-end w-full">
                                        <p>Balance 0.2 ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full mt-8 ">
                            <div className="mx-4 my-2 text-white">Amount</div>
                            <div className="w-[73%] mx-11 bg-bgColor2 rounded-xl">
                                <div className="flex px-7 py-3 text-white">
                                    <div className=" flex flex-col w-full ">
                                        <p className="text-btnColor">0.76159</p>
                                        <p className="text-white pt-2">$1.478 USD</p>
                                    </div>
                                    <div className="flex justify-end items-end pb-6">
                                    <img className="h-7 pr-3 pb-1" src={EthereumIcon} alt="Ethereum Icon" />
                                        <p className=" pb-2">  ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 bg-bgColor2 rounded-xl py-2 mt-6 ">
                            <div className="flex px-3 py-2 text-white justify-between ">
                                <div className=" flex  flex-col justify-end">
                                    <div className="flex ">
                                        <p className="text-white text-lg">GAS</p><p className="text-btnColor ps-2 text-sm pt-2" >(Estimation)</p>
                                    </div>
                                    <p className="text-btnColor pt-2">Likely in  30sec </p>
                                </div>
                                <div className=" flex flex-col ">
                                    <div className="flex ">
                                        <p className="text-white ps-14">0.000288 ETH</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-btnColor pt-2" >Max fee: </p>
                                        <p className="text-white pt-2 ps-1">0.000288 ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[4px] bg-btnColor mt-20"></div>
                        <button className="px-10 py-2 rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-7 text-lg">Send Tokens</button>
                    </div>
                </div> */}




            <div className="  rounded-3xl bg-bgColor mt-4 p-4 w-[50%]">
                    <div className="w-full flex justify-end pt-2 pr-2 text-2xl ">
                        <AiFillEdit className="text-btnColor cursor-pointer" />
                    </div>
                    <div className="  w-full pb-4 ">
                        <p className="text-heading text-3xl text-center cursor-pointer font-semibold">Token Confirmation</p>
                    </div>
                    <div className="flex  justify-between  items-center mt-3">
                        <div className="flex bg-bgColor2 w-[275px] py-4 rounded-xl ">
                            <div className="flex justify-center  items-center w-full ">
                                <p className="h-10 w-10 rounded-full bg-btnColor "></p>
                                <p className="ps-5 text-white">Account 1</p>
                            </div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-btnColor">
                            <p className=" text-white pt-2 px-3 text-xl "> <BsFillForwardFill /></p>
                        </div>
                        <div>
                            <div className="flex bg-bgColor2 w-[275px] py-4 rounded-xl ">
                                <div className="flex justify-center  items-center w-full ">
                                    <p className="h-10 w-10 rounded-full bg-btnColor "></p>
                                    <p className="ps-5 text-white">Account 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 bg-bgColor2 rounded-xl py-2 mt-6 ">
                        <div className="flex px-3 py-2 text-white justify-between ">
                            <div className=" flex  flex-col ">
                                <div className="flex ">
                                    <img className="h-6 pt-1" src={EthereumIcon} alt="Ethereum Icon" />
                                    <p className="text-white ps-2 text-2xl">Etherium</p><p className=" text-white ps-3 text-2xl" >Mannet</p>
                                </div>
                                <p className="text-btnColor ps-4 pt-2">Sending </p>
                            </div>
                            <div className=" flex flex-col ">
                                <div className="flex pb-2">
                                    <p className="text-white ps-20 text-2xl">0.2 ETH</p>
                                </div>
                                <div >
                                    <p className="text-white text-sm ps-20">$ 1220 USD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full px-4 pt-6">
                        <div className="flex flex-col justify-between">
                            <div className="flex">
                                <p className="text-white text-2xl">Gas</p><p className="text-btnColor text-sm ps-2 pt-2">(estimated)</p>
                            </div>
                            <p className="text-white text-sm">Likely in 30 secs</p>
                        </div>
                        <div>
                            <p className="text-white text-xs ps-16">$ 1220 USD</p>
                            <p className="text-white text-2xl ps-12 py-2">0.2 ETH</p>
                            <div className="flex ">
                                <p className="text-btnColor  ">Max Amount:</p>
                                <p className="text-white text-xs pt-1 ps-2">0.2 ETH</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[2px] bg-btnColor mt-4"></div>
                    <div className="flex justify-between w-full px-4 pt-6">
                        <div className="flex flex-col justify-between">
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



