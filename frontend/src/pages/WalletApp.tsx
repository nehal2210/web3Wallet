import logo from "../assets/images/logo.png";
import { BsThreeDotsVertical, BsFillPersonFill } from "react-icons/bs";
import { BiSolidCopy, BiSolidDownArrow, BiSolidSend } from 'react-icons/bi';
import ethereumIcon from '../assets/images/ethereum-icon.png';
import AppHeader from "../components/app-header";
import TokensTable from "../components/tokens-table";
import SendToken from "../components/SendToken";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TokenConfirmation from "../components/TokenConfirmation";
import SentToken from "../components/SentToken";
import { useEffect } from "react";
import { getWallet } from "../redux/wallet";


const WalletApp = () => {

  
    const dispatch = useDispatch()
    const openSendToken = useSelector((state: RootState) => state.user.openSendToken)
    const openConfirmationSendToken = useSelector((state: RootState) => state.user.openConfirmationSendToken)
    const openSentToken = useSelector((state: RootState) => state.user.openSentToken)
    const currentAccount = useSelector((state:RootState)=>state.wallet.currentAccount)

    useEffect(()=>{

        dispatch(getWallet())

    },[])

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-16">
                <img src={logo} alt='Logo' />
            </div>

            <div className="w-[80%] p-2 h-[82vh] bg-primary mt-3 rounded-2xl flex flex-col items-center">
                
                <AppHeader />

                <div className=" p-2 mt-5 flex justify-center rounded-md items-center  bg-green">
                    <p className="text-black">{currentAccount.address}</p>
                    <BiSolidCopy className="text-btnColor mx-2 cursor-pointer" />
                </div>

                <div className="mt-4 flex justify-center items-center'">
                    <p className="text-heading text-xl">0 ETH</p>
                    <div className="bg-btnColor ms-2 p-2 rounded-full flex justify-center items-center">
                        <BiSolidSend className="text-heading -rotate-45" />
                    </div>
                </div>


                <div className="flex w-full justify-between items-center mt-10">
                <TokensTable tableHeading="Tokens" date="" />

                <TokensTable tableHeading="Activity" date="October, 2023" />
                </div>


            </div>
        </div>
    )

            }

export default WalletApp;