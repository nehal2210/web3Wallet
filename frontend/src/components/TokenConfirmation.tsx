import { AiFillEdit } from "react-icons/ai";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import EthereumIcon from '../assets/images/Group 55.png';
import { useDispatch } from "react-redux";
import { setConfirmationSendTokenModal, setSentTokenModal } from "../redux/counter";


const TokenConfirmation = () => {
    
    const dispatch = useDispatch();

    return (
        <div className="fixed z-10 top-0 right-0 bottom-0 left-0 w-full h-[100vh] bg-bgColor2 bg-opacity-50 flex flex-col pt-5 items-center">

            <div className=" bg-primary rounded-3xl card-shadow mt-4 p-4 w-[40%]">
                <div className="w-full flex justify-between pt-2  text-2xl  items-center">
                    <div></div>
                    <div>
                        <p className="text-heading text-1xl  cursor-pointer font-semibold">Token Confirmation</p>
                    </div>
                    <AiFillEdit className="text-btnColor cursor-pointer" />
                </div>

                <div className="flex  justify-between  items-center mt-5">
                    <div className="flex bg-green w-[275px] py-4 rounded-xl ">
                        <div className="flex justify-center  items-center w-full ">
                            <p className="h-10 w-10 rounded-full bg-btnColor "></p>
                            <p className="ps-5 text-black">Account 1</p>
                        </div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-bgColor">
                        <p className=" text-white pt-2 px-2 text-2xl "> <BiSolidRightArrowAlt /></p>
                    </div>
                    <div>
                        <div className="flex bg-green w-[275px] py-4 rounded-xl ">
                            <div className="flex justify-center  items-center w-full ">
                                <p className="h-10 w-10 rounded-full bg-btnColor "></p>
                                <p className="ps-5 text-black">Account 2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 bg-green rounded-xl py-2 mt-6 ">
                    <div className="flex px-3 py-2 text-black justify-between ">
                        <div className=" flex  flex-col ">
                            <div className="flex ">
                                <img className="h-6 pt-1" src={EthereumIcon} alt="Ethereum Icon" />
                                <p className="text-black ps-2 text-lg">Etherium</p><p className=" text-black ps-3 text-lg" >Mannet</p>
                            </div>
                            <p className="text-btnColor ps-4 pt-2">Sending </p>
                        </div>
                        <div className=" flex flex-col ">
                            <div className="flex pb-2">
                                <p className="text-black ps-20 text-lg">0.2 ETH</p>
                            </div>
                            <div >
                                <p className="text-balck text-sm ps-20">$ 1220 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full px-4 pt-6">
                    <div className="flex flex-col justify-between">
                        <div className="flex">
                            <p className="text-black text-2xl">Gas</p><p className="text-btnColor text-sm ps-2 pt-2">(estimated)</p>
                        </div>
                        <p className="text-black text-sm">Likely in 30 secs</p>
                    </div>
                    <div>
                        <p className="text-black text-xs ps-16">$ 1220 USD</p>
                        <p className="text-black text-2xl ps-12 py-2">0.2 ETH</p>
                        <div className="flex ">
                            <p className="text-btnColor  ">Max Amount:</p>
                            <p className="text-black text-xs pt-1 ps-2">0.2 ETH</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] bg-bgShade mt-4"></div>
                <div className="flex justify-between w-full px-4 pt-6">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-black text-2xl">Total</p>
                        </div>
                        <p className="text-black text-sm">Amount gas fee</p>
                    </div>
                    <div>
                        <p className="text-black text-xs ps-16">$ 1220 USD</p>
                        <p className="text-black text-2xl ps-12 py-2">0.2 ETH</p>
                        <div className="flex ">
                            <p className="text-btnColor  ">Max Amount:</p>
                            <p className="text-black text-xs pt-1 ps-2">0.4 ETH</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[4px] bg-btnColor mt-20"></div>
                <div className="flex justify-center mt-3 ">
                    <button onClick={() => dispatch(setConfirmationSendTokenModal(false))} className="px-16  py-3 text-lg font-semibold rounded-full text-white bg-btnColor hover:bg-btnColorHover mt-4 p">Reject</button>
                    <button onClick={() => {dispatch(setConfirmationSendTokenModal(false)); dispatch(setSentTokenModal(true))}} className="px-16 py-3 text-lg font-semibold mx-4  rounded-full text-black bg-btnColor hover:bg-btnColorHover text-white mt-4">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default TokenConfirmation;