import { BiSolidDownArrow } from "react-icons/bi";
import ethereumIcon from '../assets/images/ethereum-icon.png';
import { BsFillPersonFill, BsThreeDotsVertical } from "react-icons/bs";


const AppHeader = () => {
    return (
<div className="py-2 px-4 flex justify-between items-center w-full bg-bgColor rounded-full shadow-sm shadow-black1">
                    <div className="flex-1">
                        <div className="h-[30px] w-fit border border-white flex items-center rounded-md bg-btnColorHover">
                            <div className="w-5 bg-btnColor h-full border border-white rounded-s-md flex justify-center items-center">
                                <img src={ethereumIcon} alt="blockchain icon" />
                            </div>
                            <p className="text-heading ms-2">Ethereum Mainnet</p>
                            <BiSolidDownArrow className="ms-4 mr-2 cursor-pointer" size={'12px'} color="white" />
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-btnColor rounded-full flex justify-center items-center cursor-pointer">
                                <BsFillPersonFill />
                            </div>
                            <p className="text-white-1 ms-4 cursor-pointer">Account</p>
                            <BiSolidDownArrow className="ms-4 cursor-pointer" size={'12px'} color="white" />
                        </div>
                    </div>


                    <div className="flex-1 flex justify-end">
                        <BsThreeDotsVertical className="cursor-pointer" color="white" />
                    </div>
                </div>

    );
}


export default AppHeader;