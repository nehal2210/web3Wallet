import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ethereumIcon from '../assets/images/Group 55.png';
import { BsFillPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import HeaderTokenItem from "./HeaderTokenItem";
import { useState } from "react";
import { Link } from "react-router-dom";
import NetworkDetails from "./NetworkDetails";
import OpenAccount from "./OpenAccount";
import CreateAccount from "./CreateAccount";
import AccountDetails from "./AccountDetails";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";



const AppHeader = () => {

    const [openNetwork, setOpenNetwork] = useState(false);
    const [openNetworkDetailstype, setOpenNetworkDetailstype] = useState("");
    const [openAccount, setOpenAccount] = useState(false);
    const [isNewAccount, setIsNewAccount] = useState();
    const [openAccountDetails, setOpenAccountDetails] = useState(false);
    const [exploreNetwork, setExploreNetwork] = useState(true);

    const currentAccount = useSelector((state:RootState)=>state.wallet.currentAccount)
    const currentNetwork = useSelector((state:RootState)=>state.wallet.currentNetwork)

    const wallet:any = useSelector((state:RootState)=>state.wallet.data)
    


    return (
        <div className="relative py-2 px-4 flex justify-between items-center w-full bg-white rounded-full shadow-sm shadow-black1 card-shadow z-10 bg-opacity-80">
            <div className="flex-1">

                <button onClick={() => { setOpenNetwork(!openNetwork) }} className="h-[30px] w-fit border border-white flex items-center rounded-md bg-green">
                    <div className="w-5 bg-btnColor h-full rounded-md flex justify-center items-center">
                        <img src={ethereumIcon} alt="blockchain icon" />
                    </div>
                    <p className="text-heading ms-2">{currentNetwork.name}</p>
                    {
                        openNetwork ?
                            <BiSolidUpArrow className="ms-4 mt-1 mr-2 cursor-pointer" size={'12px'} />
                            :
                            <BiSolidDownArrow className="ms-4 mt-1 mr-2 cursor-pointer" size={'12px'} />
                    }
                </button>
            </div>


            {
                openNetwork ?
                    <div className="absolute  top-14 w-[30%] h-[26rem] bg-primary border-white border-2 rounded-lg p-2 card-shadow z-10">
                        <p className="text-black m-4 font-semibold ">Add new network</p>
                        <div className="px-2 w-full max-h-[300px] h-[270px] overflow-x-auto" id="style-4">
                            {
                                wallet["networks"].map((network:any,i:any) => {
                                    return (
                                        <HeaderTokenItem   setExploreNetwork={setExploreNetwork}  network={network} openNet={(value: boolean) => setOpenNetworkDetails(value)} />
                                    )
                                })
                            }
                        </div>
                        {/* <Link to='/add-network'> */}
                        
                            <button onClick={() => setOpenNetworkDetailstype("Add Network")} className="bg-secondary-dark hover:bg-btnColorHover rounded-full w-40 p-2 text-white-1 mt-4 ms-2">
                                Add Network
                            </button>
                        {/* </Link> */}

                    </div>
                    :
                    null
            }


            <div className="flex-1 flex justify-center">
                <button onClick={() => {setOpenAccount(true)}} className="flex items-center">
                    <div className="w-8 h-8 bg-bgColor text-white rounded-full flex justify-center items-center cursor-pointer">
                        <BsFillPersonFill />
                    </div>
                    <p className="ms-4 cursor-pointer">{currentAccount.name}</p>
                    <BiSolidDownArrow className="ms-4 cursor-pointer" size={'12px'} />
                </button>
            </div>


            <div className="flex-1 flex justify-end">
                <BsThreeDotsVertical className="cursor-pointer" />
            </div>

            {
                openNetworkDetails ? 
                <NetworkDetails exploreNetwork={exploreNetwork} openNet={(value: boolean) => setOpenNetworkDetails(value)} />
                : 
                null

            }

            {
                openAccount ? 
                <OpenAccount isAccountOpen={(value: boolean) => setOpenAccount(value)} isNewAccount={(value: any) => {setIsNewAccount(value); setOpenAccount(false)}}  />
                : 
                null

            }

            {
                isNewAccount ? 
                <CreateAccount accountType={isNewAccount} isNewAccount={(value: any) => setIsNewAccount(value)} />
                : 
                null

            }
            {
                openAccountDetails ? 
                <AccountDetails isAccountDetails={(value: any) => setOpenAccountDetails(value)} />
                : 
                null

            }
             
        </div>

    );
}


export default AppHeader;