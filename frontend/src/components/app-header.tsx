import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ethereumIcon from '../assets/images/ethereum-icon.png';
import { BsFillPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import HeaderTokenItem from "./HeaderTokenItem";
import { useState } from "react";



const AppHeader = () => {

    const [openNetwork, setOpenNetwork] = useState(false);


    return (
        <div className="relative py-2 px-4 flex justify-between items-center w-full bg-bgColor rounded-full shadow-sm shadow-black1">
            <div className="flex-1">

                <button onClick={() => {setOpenNetwork(!openNetwork)}} className="h-[30px] w-fit border border-white flex items-center rounded-md bg-btnColorHover">
                    <div className="w-5 bg-btnColor h-full border border-white rounded-s-md flex justify-center items-center">
                        <img src={ethereumIcon} alt="blockchain icon" />
                    </div>
                    <p className="text-heading ms-2">Ethereum Mainnet</p>
                    {
                        openNetwork ?
                        <BiSolidUpArrow className="ms-4 mt-1 mr-2 cursor-pointer" size={'12px'} color="white" />
                        :
                        <BiSolidDownArrow className="ms-4 mt-1 mr-2 cursor-pointer" size={'12px'} color="white" />
                    }
                </button>
            </div>


            {
                openNetwork ?
                    <div className="absolute top-14 w-[30%] h-[26rem] bg-primary border-white border-2 rounded-lg p-2">
                        <p className="text-white m-4 ">Add new network</p>
                        <div className="px-2 w-full max-h-[300px] h-[270px] overflow-x-auto" id="style-4">

                            <HeaderTokenItem />
                            <HeaderTokenItem />
                            <HeaderTokenItem />
                            <HeaderTokenItem />

                        </div>
                        <button className="bg-btnColor hover:bg-btnColorHover rounded-full w-40 p-2 text-white-1 mt-4 ms-2">
                            Add Network
                        </button>

                    </div>
                    :
                    null
            }


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